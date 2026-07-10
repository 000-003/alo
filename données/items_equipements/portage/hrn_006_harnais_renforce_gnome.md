# Harnais Renforcé Gnome

## Identification Cardinal
- **Item_ID** : `HRN_006`
- **Catégorie** : Portage · **Type** : Sangle d'armes (dos)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 15 · **Affinité raciale** : Aucune (variante régionale Gnome)

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Porte **3 armes au dos** (dégainage dorsal sans commande) — **aucun stockage d'items** |
| Slot | `gear_back` (alternative au sac : sac **XOR** sangle) |
| Niveau requis | 15 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : selliers-forgerons de Granzam / craft `!sew`
- **Recette** : 3× cuir souple + 1× maille légère + boucles de fer *(`!sew`)*
- **Prix** : 1 400 Yrds (achat) · 350 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Renforcé de plaquettes de métal aux points d'usure, ce harnais gnome supporte les armes lourdes que les autres sangles feraient ballotter. Trois emplacements dorsaux solides comme un mécanisme d'horlogerie. Les guerriers Gnome y accrochent volontiers marteaux et haches — le poids ne les effraie jamais.

## Intégration Bot
- Joueur : `!equiper HRN_006 dos` · `!sew` — GM : `!sys_give HRN_006 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, HRN_006, 1)`
