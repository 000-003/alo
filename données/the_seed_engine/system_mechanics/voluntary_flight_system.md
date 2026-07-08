# Système de Vol Volontaire (Voluntary Flight)

## 1. Définition Cardinal System
Dans ALfheim Online, le vol est la mécanique centrale. Mais il existe deux modes de vol radicalement différents, et seul le second permet de maîtriser pleinement les combats aériens.

## 2. Vol Assisté (Controller Mode)
- **Activation** : `!voler [Destination]` (mode par défaut)
- Le système guide automatiquement la trajectoire. Le joueur indique une direction et le moteur Cardinal calcule le chemin optimal.
- **Limitations** : Vitesse plafonnée à `AGI * 0.5`. Pas de manœuvres acrobatiques. Incapable d'esquiver les projectiles en vol.
- **Avantage** : Aucun risque de crash. Consommation de MP réduite (`8 MP/min`).

## 3. Vol Libre (Voluntary Flight)
- **Activation** : `!vol_libre [Direction]` (nécessite déblocage)
- **Condition de Déblocage** : Le joueur doit atteindre le Niveau 20 ET avoir complété la quête *"Leçons de Leafa"* auprès du PNJ instructeur de vol de sa capitale raciale.
- Le joueur contrôle directement les "muscles imaginaires" de ses ailes via des commandes de direction fine. Aucune assistance du système.
- **Vitesse Max** : `AGI * 1.5` (3x plus rapide que le vol assisté).
- **Manœuvres Spéciales** : 
  - `!barrel_roll` : Esquive rotative (90% d'évasion contre les projectiles, coût: 30 MP)
  - `!dive_bomb` : Piqué offensif (+50% dégâts de la prochaine attaque, risque de crash si raté)
  - `!hover` : Vol stationnaire pour caster des sorts en altitude
- **Risque** : Si le joueur manque de MP en Vol Libre, il tombe en chute libre. Pas de filet de sécurité.

## 4. Jauge de Vol (Flight Duration Limit)
- Conformément au canon SAO, le vol dans ALO n'est pas illimité. Chaque joueur possède une **barre de Vol** (Flight Gauge) qui s'épuise avec le temps.
- **Durée maximale de vol continu** : `10 minutes` (recharge au sol en 1 minute).
- Les Sylphes bénéficient de +30% de durée de vol. Les Gnomes subissent -30%.
- Lorsque la barre est vide, les ailes se rétractent et le joueur chute, quelle que soit son altitude.

## 5. Commandes IA Associées
- `SYS_DISABLE_FLIGHT(Zone_ID)` : L'IA peut interdire le vol dans certaines zones (grottes, intérieurs, anti-vol magique).
- `SYS_EXTEND_FLIGHT_GAUGE(Avatar_ID, Seconds)` : L'IA peut octroyer un bonus de vol pour une quête narrative.
- `SYS_FORCE_CRASH(Avatar_ID)` : L'IA force la chute d'un joueur en vol (embuscade, piège, tempête).
