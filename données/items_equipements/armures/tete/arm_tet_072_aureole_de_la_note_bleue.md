# Auréole de la Note Bleue

## Identification Cardinal
- **Item_ID** : `ARM_TET_072`
- **Slot** : Tête — Auréole · **Classe** : Tissu
- **Tier** : T5 · **Rareté** : Légendaire
- **Niveau requis** : 45 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 144 |
| RES magique | 92 |
| Poids | 0,1 kg |
| Durabilité | 1 100 |
| Pénalité de vol | 0% |
| Bonus | +10 CHA ; « Note Bleue » (`!activer note_bleue`, 1×/jour) : la prochaine mélodie affecte tous les groupes WhatsApp adjacents (zones liées dans `T_ZONE_LINKS`) |

## Acquisition & Chaînage économique
- **Source** : Craft unique — requiert le titre « Voix de Lioda » (victoire au concours de la Grande Scène + Amphithéâtre Oublié terminé).
- **Recette** : 1× Baguette du Maestro (drop garanti premier kill `BOSS_PUC_DUN_001`, Ondaro) + 7× Corde de l'ancien orgue + 1× Fil de mithril pur.
- **Prix** : Invendable (liée à l'âme).

## Lore (Encyclopédie d'Argo)
La théorie musicale de Lioda nomme « note bleue » celle qui n'appartient à aucune gamme et les complète toutes. Le Cardinal, interrogé par un barde légendaire sur son existence, aurait répondu en générant cet objet — un anneau de lumière qui flotte sans toucher les cheveux. Quand la Note sonne, les murs entre les zones cessent brièvement d'être des murs.

## Intégration Bot
- Joueur : `!equiper ARM_TET_072 tete` · `!inspect ARM_TET_072` — GM : `!sys_give ARM_TET_072 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_072, 1)`
