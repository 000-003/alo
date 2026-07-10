# Harnais de Chasseur

## Identification Cardinal
- **Item_ID** : `HRN_002`
- **Catégorie** : Portage · **Type** : Sangle d'armes (dos)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune (variante régionale Cait Sith)

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Porte **2 armes au dos** (dégainage dorsal sans commande) — **aucun stockage d'items** |
| Slot | `gear_back` (alternative au sac : sac **XOR** sangle) |
| Niveau requis | 1 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : selliers de Freelia et comptoirs de chasse
- **Recette** : 2× cuir souple + sangles croisées + boucle *(`!sew`)*
- **Prix** : 300 Yrds (achat) · 75 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les traqueurs Cait Sith ont conçu ce harnais croisé pour garder les mains libres à la course tout en portant arc et lame de secours. La sangle épouse le mouvement du corps, ne ballotte pas, ne trahit pas. Deux armes au dos, zéro sac — le chasseur voyage léger et frappe vite.

## Intégration Bot
- Joueur : `!equiper HRN_002 dos` · `!sew` — GM : `!sys_give HRN_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, HRN_002, 1)`
