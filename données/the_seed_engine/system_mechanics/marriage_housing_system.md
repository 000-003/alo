# Système de Mariage et Housing (Social Bonding)

## 1. Système de Mariage (Marriage Contract)
Dans ALO comme dans SAO, deux joueurs peuvent se marier. Ce n'est pas cosmétique : le mariage a des effets mécaniques réels.

### 1.1 Mécanique
- **Activation** : `!propose [Num_WhatsApp]` — Le joueur envoie une demande de mariage.
- **Acceptation** : `!accept_proposal` — Le partenaire valide.
- **Conditions** : Les deux joueurs doivent être au minimum Niveau 15 et posséder un *Anneau d'Engagement* (Ring of Betrothal), achetable chez un bijoutier PNJ pour 50 000 Yrds.
- **Cérémonie** : L'IA génère une narration de cérémonie dans le groupe WhatsApp de la ville où les joueurs se trouvent.

### 1.2 Bonus de Mariage
- **Telepathy** : Les deux époux peuvent communiquer via `!whisper_partner [Message]` peu importe la zone, sans coût.
- **Partner Link** : Lorsqu'ils combattent dans la même Party, les dégâts combinés bénéficient d'un bonus de synergie de +10% (Combo Conjugal).
- **Shared Storage** : `!partner_bank` — Coffre commun entre les deux joueurs.
- **Location Tracking** : `!partner_locate` — Affiche la zone dans laquelle se trouve le partenaire.

### 1.3 Divorce
- `!divorce` — Annule le contrat de mariage. Pénalité : division de 50% du Shared Storage. Cooldown de 30 jours avant un nouveau mariage.

## 2. Système de Housing (Player Home)
Les joueurs peuvent acquérir une maison dans la capitale de leur race.

### 2.1 Acquisition
- `!housing_buy [Type]` — Types : Chambre d'Auberge (5 000 Yrds), Petite Maison (50 000 Yrds), Manoir (500 000 Yrds), Château de Guilde (5 000 000 Yrds).
- Le bot crée un groupe WhatsApp privé pour le logement du joueur. Seuls les joueurs invités peuvent y entrer.

### 2.2 Fonctionnalités
- **Repos** : Se reposer chez soi régénère 5% HP/MP par minute (au lieu de 1% en extérieur).
- **Stockage Étendu** : La maison double la capacité de l'inventaire du joueur via `!home_storage`.
- **Décoration** : `!decorate [Item]` — Les objets décoratifs trouvés en loot ou craftés donnent des buffs passifs (ex: Fontaine Elfique = +5% régénération MP quand dans la maison).
- **Invitations** : `!home_invite [Num_WhatsApp]` / `!home_kick [Num_WhatsApp]`.

### 2.3 Housing de Guilde
- `!guild_hall_upgrade [Tier]` — Le QG de guilde est un groupe WhatsApp permanent. Les upgrades ajoutent : Salle de Stratégie (+5% EXP en raid), Forge Privée (craft sans marchand), Infirmerie (regen x3).

## 3. Commandes IA Associées
- `SYS_GENERATE_CEREMONY(Avatar_ID_1, Avatar_ID_2, Zone_ID)` : L'IA génère la narration de la cérémonie de mariage.
- `SYS_CREATE_HOME_GROUP(Avatar_ID, House_Type)` : L'IA crée le groupe WhatsApp privé associé au logement.
- `SYS_DESTROY_HOME(Avatar_ID, Reason)` : L'IA peut détruire la maison d'un joueur lors d'une invasion de mobs.
- `SYS_INVADE_GUILD_HALL(Guild_ID, Attacker_Guild_ID)` : L'IA déclenche un siège sur le QG d'une guilde.
