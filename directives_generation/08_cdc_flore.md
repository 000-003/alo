# 🌿 CDC-FLO-01 — Flore : nodes de récolte des 9 territoires + neutres + Yggdrasil (1 lot de 100) — D42

> **Destinataire** : modèle générateur délégué. Document autoporteur ; règles d'or **D37** applicables (cf. `02_cdc_items.md` §0).
> **Rôle de la flore** : une fiche flore = un **node de récolte** dans le monde. Elle ne remplace pas l'item : elle **produit** un matériau `MAT_HRB_*` (lot I-3) ou un ingrédient de cuisine. C'est le maillon récolte de la chaîne : flore → matériau → recette (potion/plat/teinture) → boutique.
> **Junk à archiver AVANT** : les 15 `flore_<race>_N.md` de la racine `lore_mecaniques/flore_environnement/` → `deprecated_v1/flore/` (leur structure en 3 sections est reprise, leur contenu non).

---

## 1. Plages d'ID (fermées) — `FLO_<SEC>_<NNN>`

| Périmètre | Plage | Nb | Dossier |
|---|---|---|---|
| 9 territoires raciaux | `FLO_<SEC>_001-010` (SEC = `SYL SAL UND CAI PUC IMP GNO LEP SPR`) | 90 | `flore_environnement/<race>/` (les 6 dossiers existants + `caitsith/`, `puca/`, `leprechaun/`, `spriggan/` à créer) |
| Zones neutres (Alne) | `FLO_NEU_001-006` | 6 | `flore_environnement/neutre/` |
| Yggdrasil (endgame) | `FLO_YGG_001-004` | 4 | `flore_environnement/yggdrasil/` (à créer) |

**Composition imposée par territoire (10)** : 3 communes T1 (périphérie) · 3 T2 (HUNT_001) · 2 T3 (HUNT_002) · 1 T4 (abords du donjon) · 1 **signature raciale** (liée au plat signature `CSM_NOU_001-009` ou à l'anti-jauge locale D12 — ex. la plante anti-HEAT pousse en Salamander, l'algue anti-OXYGEN en Undine). Yggdrasil : T5, dont la « feuille impossible à cueillir deux fois » de Yssa `NPC_ALN_15` (canon roster, à ficher en `FLO_YGG_001`).

## 2. Gabarit de fiche (4 sections)

```markdown
# 🌿 <Nom de la plante> — `FLO_<SEC>_<NNN>`

## 1. Profil Botanique
<2-4 phrases : apparence, où et comment elle pousse, un détail mémorable. Ton Encyclopédie d'Argo.>

## 2. Paramètres de Récolte
| Paramètre | Valeur |
|---|---|
| Localisation | `ZONE_<SEC>_<TYPE>_<NNN>` (zone existante de l'atlas UNIQUEMENT) + micro-lieu |
| Spawn chance | <5-20%> par node |
| Respawn | <1-4 h réelles> |
| Outil / Niveau de récolte | Faucille T<n> / Niv <grille §3> |
| Condition | <— / nuit / pluie / jauge D12 active / saison> |

## 3. Produit & Chaînage économique
| Paramètre | Valeur |
|---|---|
| Produit | `MAT_HRB_<NNN>` ×<1-3> (lot I-3) — ou ingrédient `[BESOIN_ITEM]` |
| Entre dans | <recette(s) : CSM_*/teinture/enchant existants> |
| Acheté par | <PNJ_ID herboriste/alchimiste existant> à <prix du MAT_*> |

## 4. Intégration Bot
- Joueur : `!recolter <nom>` — GM : `!sys_give MAT_HRB_<NNN> [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_HRB_<NNN>, Qty)`
```

## 3. Grilles (fermées)

| Tier plante | Niveau de récolte | Spawn | Respawn | Zone de pousse |
|---|---|---|---|---|
| T1 | 1-8 | 12-20% | 1 h | périphérie CAP |
| T2 | 10-18 | 8-15% | 2 h | HUNT_001 |
| T3 | 20-30 | 6-10% | 3 h | HUNT_002 |
| T4 | 32-42 | 5-8% | 4 h | abords DUN_001 |
| T5 (YGG) | 43+ | ≤5% | 12 h ou unique | Yggdrasil |

Acheteurs de référence (herboristes/alchimistes actés) : Salvia `NPC_GAT_56`, Ophrys `NPC_ALN_28`, Meryl `NPC_SWI_12`, Nael `NPC_SWI_61`, Sulf `NPC_VOU_65` — pour les 7 villes non fichées, pointer l'herboriste du roster dès sa livraison ou `[BESOIN_PNJ]`.

## 4. Checklist de recette

1. 100 fiches exactes (90+6+4), dossiers raciaux complets, junk racine archivé.
2. Chaque plante : zone de l'atlas réelle, produit `MAT_*` résoluble, ≥1 acheteur, ≥1 recette.
3. Les 9 signatures raciales couvrent les 9 plats `CSM_NOU_001-009` et les anti-jauges D12 locales.
4. `!recolter` : commande à faire acter par l'Architecte à la recette si absente des fichiers de commandes (`[BESOIN_COMMANDE]` — le générateur ne touche pas aux fichiers maîtres).
5. Index `_index_flore.md` : table complète ID | Nom | Territoire | Tier | Produit | Acheteur.
