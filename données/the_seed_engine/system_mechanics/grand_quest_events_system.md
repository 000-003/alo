# Système de Grand Quest & Événements Mondiaux (World Events)

## 1. Définition Cardinal System
Les Grand Quests sont des événements narratifs à l'échelle du serveur entier qui modifient durablement la géopolitique et la géographie du monde d'ALO. Elles sont déclenchées par l'IA Cardinal lorsque les conditions sont réunies.

## 2. Grand Quests Canoniques

### 2.1 L'Ascension de l'Arbre-Monde (World Tree Assault)
- **Déclencheur** : Lorsqu'au moins 3 guildes de races différentes forment une alliance via `!alliance_create`.
- **Objectif** : Atteindre le sommet d'Yggdrasil en traversant les 3 paliers de gardiens (Golden Knights, Dragon Sentinels, Oberon's Guard).
- **Récompense** : La race dominante obtient l'accès exclusif à la zone "Terre Promise" (buffs passifs serveur-wide). Le leader de l'alliance obtient le titre de *Roi des Fées* (Fairy King).
- **Conséquence de l'Échec** : Les gardiens se renforcent de +20% pour la prochaine tentative. Un délai de 7 jours avant une nouvelle tentative.

### 2.2 La Quête d'Excalibur (Calibur Quest)
- **Déclencheur** : `SYS_TRIGGER_GRAND_QUEST(CALIBUR)` lorsque l'IA détecte que l'équilibre entre Jötunheimr et ALO est menacé.
- **Objectif** : Descendre dans les profondeurs de Jötunheimr, affronter le roi Thrym, et extraire l'épée sacrée Excalibur de la racine inversée d'Yggdrasil.
- **Récompense** : L'épée Excalibur (arme la plus puissante du jeu) + 500 000 Yrds pour le groupe.
- **Conséquence de l'Échec** : ALfheim est plongé dans un hiver éternel (debuff météo serveur-wide pendant 3 jours).

### 2.3 La Purge du Renégat (Renegade Hunt)
- **Déclencheur** : Automatique lorsqu'un joueur accumule plus de 50 kills PK sans être capturé.
- **Objectif** : Tous les joueurs reçoivent une alerte : *"SYSTÈME CARDINAL : Le Renégat [Nom] menace l'équilibre du monde. Prime de 1 000 000 Yrds."*
- **Mécanique** : Le PKer est traqué par le serveur. Sa position est révélée toutes les 10 minutes. Tous les joueurs peuvent l'attaquer sans pénalité.
- **Récompense du Tueur** : 1 000 000 Yrds + Titre *"Chasseur de Primes Légendaire"*.

### 2.4 Le Siège de Capitale (Territory Siege)
- **Déclencheur** : `SYS_TRIGGER_SIEGE(Capital_Zone_ID, Attacking_Race)` — L'IA décide qu'une race trop puissante doit être contestée.
- **Objectif** : Les joueurs de la race attaquante tentent de capturer la Salle du Trône de la capitale ennemie.
- **Mécanique** : Combat de masse. Le bot crée un groupe WhatsApp temporaire *"Champ de Bataille"* et y ajoute tous les joueurs des deux factions.
- **Conséquence** : La race victorieuse impose un impôt de 10% sur toutes les transactions de la race vaincue pendant 7 jours.

## 3. Événements Saisonniers

| Événement | Déclencheur | Durée | Effet |
|---|---|---|---|
| Festival de la Lune | Automatique tous les 30 jours IRL | 3 jours | Vol illimité (pas de Flight Gauge), marchands spéciaux |
| Invasion des Ombres | L'IA décide (SYS_TRIGGER_EVENT) | 1 jour | Mobs x2 dans toutes les zones, EXP x3, mais la mort fait perdre 50% des Yrds |
| Tournoi des Champions | Déclenché par un Lord via `!lord_tournament` | 1 jour | Arène PvP, classements, récompenses exclusives |
| Nuit des Esprits | Automatique à chaque nouvelle lune IRL | 1 nuit | Les mobs fantômes apparaissent. Loot de cristaux rares. Vision nulle sauf pour Imps. |

## 4. Commandes IA
- `SYS_TRIGGER_GRAND_QUEST(Quest_Type)` : L'IA déclenche une Grand Quest.
- `SYS_OPEN_WORLD_TREE_GATE(Floor)` : L'IA ouvre un palier d'Yggdrasil pour l'ascension.
- `SYS_CLOSE_WORLD_TREE_GATE(Floor)` : L'IA referme le palier après échec.
- `SYS_TRIGGER_SIEGE(Target_Capital, Attacking_Race)` : L'IA lance un siège de capitale.
- `SYS_ACTIVATE_SEASONAL_EVENT(Event_Type, Duration_Days)` : L'IA active un événement saisonnier.
- `SYS_BROADCAST_WORLD_MESSAGE(Text)` : L'IA envoie un message scénarisé dans TOUS les groupes.
- `SYS_MODIFY_WORLD_STATE(State_Key, Value)` : L'IA modifie une variable globale du monde (ex: `eternal_winter = true`).
