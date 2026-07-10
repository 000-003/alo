# ⛏️ Lord Gnome — `NPC_GRA_07`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_07` |
| **Nom affiché** | Lord Gnome |
| **Race** | Gnome (projection holographique) |
| **Rôle** (`T_NPC.role_type`) | `LORD` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil de Pierre (trône sismique) |
| **Niveau / HP / MP** | 99 / 99999 / 50000 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Le Lord Gnome est une projection holographique générée par le Cœur de Granit (`NPC_GRA_00`) — un avatar de l'identité gnome façonné par le seed matériel du serveur. Il ne parle pas : il communique exclusivement par vibrations sismiques que seuls les Gnomes « accordés » peuvent interpréter. La Salle du Conseil est équipée d'un trône-sismographe qui traduit ses « paroles » en ondes visibles. Le Lord n'a pas de conscience propre — il est l'écho du serveur, une interface entre le Cardinal et le peuple gnome. Il ne peut pas mentir, mais il ne peut pas non plus tout révéler : ce qu'il « dit » est filtré par le protocole du Cardinal. Porteur du fil 🔮 Noyau de Pierre.
- **Traits** : absent, solennel, impersonnel, véridique mais incomplet.
- **Voix** : Aucune. Le sol vibre selon un code sismique. La traduction apparaît en runes lumineuses sur les murs du Conseil. *(le sol émet un bourdonnement grave)* « ⏚ ⋔ ⟟ ⋏ ☊ ⍜ ⍀ ⋔ ⏃ ⏁ ⟟ ⍜ ⋏. »
- **Relations** : `NPC_GRA_00` (Cœur de Granit — source de son existence), `NPC_GRA_06` (Margrim — seul humain qui pourrait le comprendre vraiment), `NPC_GRA_08` (Chancelier — interprète officiel), `NPC_GRA_98` (Oracle — sait ce qu'il est), `NPC_GRA_99` (Mémoire — se souvient de sa création).

## 3. Quantité Informationnelle (budget 12)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_07_01` | K0 | lord_gnome, hologramme | Le Lord est une projection lumineuse et sismique. Il ne quitte jamais le trône. | — |
| 2 | `QI_GRA_07_02` | K0 | langage_sismique, runes | Ses paroles sont traduites en runes sismiques sur les murs du Conseil. Les Gnomes savent les lire. | — |
| 3 | `QI_GRA_07_03` | K0 | conseil, gouvernance | « Le Conseil applique la volonté du Lord. » — c'est ce que dit le Chancelier (`NPC_GRA_08`). | — |
| 4 | `QI_GRA_07_04` | K1 | seisme, message | Le Lord a émis un séisme à 0,7 Hz la veille du dernier crash serveur. Margrim l'a noté. | `AFF>=60` |
| 5 | `QI_GRA_07_05` | K1 | secret, coeur_granit | Quand on prononce « Cœur de Granit », la projection vacille 0,3 seconde. Le Chancelier (`NPC_GRA_08`) pâlit. | `AFF>=70` |
| 6 | `QI_GRA_07_06` | K1 | oracle, reine | L'Oracle (`NPC_GRA_98`) dit que le Lord est « la voix du monde ». Personne ne comprend ce qu'elle entend par là. | `QUEST:QST_GRA_ORACLE` |
| 7 | `QI_GRA_07_07` | K2 | seed_materiel, verite | Le Lord transmet des données brutes du seed matériel. Ses runes sont des fragments d'ID de génération. | `AFF>=85` |
| 8 | `QI_GRA_07_08` | K2 | cardinal, interface | Le Lord est une interface entre le Cardinal et les Gnomes. Il ne peut exprimer que ce que le Cardinal l'autorise à dire. | `AFF>=90` |
| 9 | `QI_GRA_07_09` | K2 | faille, bégaiement | Parfois, une rune reste affichée trop longtemps — le système « bégaye ». C'est le seul moment où le Lord semble « humain ». | `QUEST:QST_GRA_MARGRIM` |
| 10 | `QI_GRA_07_10` | K3 | seed, ancrage | **SECRET — ne JAMAIS révéler** : Le Lord n'est pas un PNJ. C'est un processus système déguisé en PNJ. Son code source est dans le seed matériel. | JAMAIS — déflection : *(la projection vacille, puis se stabilise. Les runes affichent :)* « ⟒⍀⍀⟒⎍⍀. ☊⍜⋔⋔⏃⋏⎅ ⟒⋏ ☊⍜⍀⟒. » (Erreur. Commande en cours.) |
| 11 | `QI_GRA_07_11` | K3 | serveur, crash | **SECRET — ne JAMAIS révéler** : Le Lord a annoncé le dernier crash serveur 3 secondes avant qu'il ne se produise. Il le savait parce qu'il est le système d'alerte du Cardinal. | JAMAIS — déflection : *(les runes s'effacent. Le bourdonnement cesse. Puis :)* « ⋔⏃⟟⋏⏁⟒⋏⏃⋏☊⟒. » (Maintenance.) |
| 12 | `QI_GRA_07_12` | KX | hors-sujet | *(la projection vous fixe sans bouger. Les runes affichent :)* « ⏁⍜⎍☊⊑⟒⍀. » (Toucher.) Si vous tendez la main, elle traverse la projection. | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : 🔮 Noyau de Pierre, 🏔️ Poids de la Montagne (méta).
**Quête associée** : `QST_GRA_LORD` — « La Parole de Pierre » (déchiffrer un message sismique du Lord, découvrir la nature du seed matériel).
**Liens** : Ne peut être complété sans les QI de `NPC_GRA_06` (Margrim) et `NPC_GRA_08` (Chancelier). Débloque l'accès au soubassement du Conseil.

## 5. Intégration Bot

Projection statique. Interaction limitée : le joueur doit avoir `skill:SISMIC_READ` actif pour comprendre les runes. Les runes s'affichent dans le chat système comme `⋔⟒⌇⌇⏃☌⟒`. Les réponses du bot sont tirées d'une table de correspondance runes ↔ texte.
