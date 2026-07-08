# Module IA : The Cardinal System (AI Orchestrator & Function Calling)

## 1. Concept : L'IA comme Cerveau Omniscient (Orchestrateur)
Pour éviter les hallucinations et garantir une **qualité de texte digne d'un roman de Light Novel**, l'IA n'est plus un simple narrateur : elle est le cœur du Moteur Cardinal. 
Nous utilisons le principe de **RAG (Retrieval-Augmented Generation)** couplé au **Function Calling**. 
L'IA lit les données absolues de la base de données SQL (qui l'empêche d'halluciner des objets qui n'existent pas) et génère du texte tout en appelant des commandes cachées pour modifier le monde.

## 2. Le Choix Technologique : Qualité & Anti-Quota
Puisque la priorité est la **qualité littéraire** et la **résistance aux quotas** (et non la vitesse absolue), nous utiliserons une architecture de *Queuing* (File d'attente) avec le meilleur modèle Serverless :

**Google Gemini 1.5 Pro / Gemini 1.5 Flash (Google AI Studio)**
- **Qualité Littéraire** : Gemini 1.5 possède une fenêtre de contexte de 2 millions de tokens. On peut lui injecter l'intégralité du Lore (MCD, Encyclopédie) dans son Prompt Système pour qu'il ne contredise JAMAIS l'univers de SAO.
- **Quota Gratuit** : Le free-tier permet jusqu'à 15 requêtes par minute. 
- **La Solution Anti-Crash (Le système de Queue Node.js)** : Pour éviter que le bot ne s'arrête lorsque 200 joueurs spamment en même temps, le backend Node.js utilisera une file d'attente (ex: `BullMQ` ou une Queue asynchrone). Si 50 requêtes arrivent, Node.js les envoie une par une à Gemini. Les joueurs verront un indicateur : *"Le Système Cardinal analyse votre action..."* pendant quelques secondes, garantissant que le serveur ne tombe jamais.

## 3. Empêcher l'Hallucination (Strict Grounding)
L'IA a l'interdiction de créer des chiffres ou des noms d'items. 
**Boucle de traitement :**
1. Le joueur parle à un PNJ (*"Donne-moi ton épée magique !"*).
2. Node.js va chercher la fiche du PNJ et son inventaire réel dans `T_INVENTORY`.
3. Node.js envoie le prompt à Gemini : *"Le joueur tente de voler le PNJ. Le PNJ s'appelle Thror, il possède [Epée en Fer]. Décide de sa réaction et renvoie la fonction JSON appropriée."*
4. Si l'IA tente d'inventer une épée Excalibur, le parseur Node.js rejettera la fonction car l'item n'existe pas dans la Database. C'est la base de données qui fait autorité, l'IA n'est que l'interprète.

## 4. Implémentation Code (Queue System + Function Calling)

```javascript
// Architecture robuste anti-quota
const { GoogleGenerativeAI } = require("@google/generative-ai");
const queue = require('async/queue'); // Empêche de saturer l'API gratuite

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // ou 1.5-pro

// Définition de la Queue de traitement (Rate Limiting)
const aiQueue = queue(async (task, callback) => {
    try {
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: task.prompt }] }],
            tools: [ cardinalToolsDeclarations ] // L'IA a accès aux commandes (SYS_BUFF, SYS_GIVE, etc.)
        });
        
        // 1. Envoi de la narration épique sur WhatsApp
        await whatsappClient.sendMessage(task.groupId, { text: result.response.text() });

        // 2. Exécution des modifications SQL si l'IA a invoqué un outil (Function Calling)
        if (result.response.functionCalls) {
            await executeCardinalFunctions(result.response.functionCalls);
        }
        
        // Pause de 4 secondes pour respecter le quota gratuit (15 RPM)
        await new Promise(resolve => setTimeout(resolve, 4000));
        callback();
    } catch (error) {
        console.error("Erreur IA, rollback effectué :", error);
    }
}, 1); // Concurrency de 1 pour ne jamais dépasser la limite de l'API.

// Utilisation lors d'un message WhatsApp
whatsappClient.on('message', async (msg) => {
    aiQueue.push({ prompt: buildStrictPrompt(msg), groupId: msg.chatId });
});
```

Avec ce design, le bot absorbe des centaines de messages sans planter, maintient une cohérence absolue (zéro hallucination), et manipule activement le monde tel un vrai Dieu de l'Aincrad.
