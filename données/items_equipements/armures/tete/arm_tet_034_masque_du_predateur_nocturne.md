# Masque du Prédateur Nocturne

## Identification Cardinal
- **Item_ID** : `ARM_TET_034`
- **Slot** : Tête — Masque · **Classe** : Cuir
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 36 · **Affinité raciale** : Cait Sith (+5% aux bonus si Cait Sith)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 88 |
| RES magique | 35 |
| Poids | 1,0 kg |
| Durabilité | 800 |
| Pénalité de vol | 0% |
| Bonus | Vision nocturne totale ; +12% dégâts entre 22h et 6h (heure serveur) ; +5 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft d'élite — bourreliers de Freelia ; le composant clé ne tombe que de nuit.
- **Recette** : 1× Œil du rôdeur nocturne (drop `MOB_CAI_026`, boss de zone, spawn nocturne uniquement) + 6× Cuir tacheté + 2× Gemme d'onyx (import Imp, Duskarn).
- **Prix** : 15 500 Yrds (achat) · 3 850 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les orbites du masque sont serties d'onyx de Duskarn taillé en pupille fendue. À la nuit tombée, elles s'allument d'un éclat vert que les autres joueurs voient — et redoutent. La Savane des Crocs a un dicton : si deux lueurs vertes te fixent, la question n'est plus « quoi », mais « depuis quand ».

## Intégration Bot
- Joueur : `!equiper ARM_TET_034 tete` · `!inspect ARM_TET_034` — GM : `!sys_give ARM_TET_034 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_034, 1)`
