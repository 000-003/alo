# 👕 CDC-OFT-01 — Tenue par défaut des nouveaux joueurs (D46)

> **Destinataire** : modèle générateur délégué. Document autoporteur ; règles d'or **D37** applicables (cf. `02_cdc_items.md` §0).
> **Rôle** : tout nouvel avatar apparaît **habillé** — jamais nu. À la création, le système équipe 2 pièces (`OFT_TOP_*` en torse, `OFT_BOT_*` en jambes) choisies selon la **ville d'apparition** (variante régionale) et le `gender`. Ce sont de vraies armures T0 (DEF minime), remplaçables dès le premier achat, rachetables pour trois fois rien.

---

## 1. Composition de la tenue (imposée)

Une tenue = **1 haut + 1 bas**, mappés sur 2 des 5 slots d'armure (D44) :

| Pièce | Slot | Préfixe | Options |
|---|---|---|---|
| **Haut** | `equip_torso` | `OFT_TOP_*` | t-shirt (toujours) |
| **Bas** | `equip_legs` | `OFT_BOT_*` | **pantalon** · **short** · **robe** |

**Règles de genre (strictes)** :
- `male` : t-shirt + (pantalon **ou** short).
- `female` : t-shirt + (pantalon **ou** short **ou** robe).
- La combinaison **t-shirt + robe est réservée à `female`** (contrainte `CHECK` à la création : `bottom_type='robe' ⇒ gender='female'`).

> Le short et le pantalon existent pour les deux genres. Seule la robe est genrée.

## 2. Variantes régionales (« selon leur emplacement »)

Chaque ville d'apparition habille ses recrues à sa couleur/coupe locale (immersion : on reconnaît un débutant de Gattan à sa tenue de cendre). **11 villes d'apparition** = 11 jeux de tenues.

| Ville (spawn) | Zone | Style régional (indicatif pour le lore) |
|---|---|---|
| Alne 🌳 | `ZONE_NEU_CAP_001` | lin écru neutre, liseré vert Yggdrasil |
| Swilvane 🍃 | `ZONE_SYL_CAP_001` | toile légère verte, coupe fluide (vent) |
| Gattan 🔥 | `ZONE_SAL_CAP_001` | coton sombre teinté cendre, rouge braise |
| Voulg ⚒️ | `ZONE_SAL_TWN_001` | treillis de garnison, gris fer |
| Freelia 🐾 | `ZONE_CAI_CAP_001` | tissu fauve, motifs de savane |
| Archipel d'Écume 🌊 | `ZONE_UND_CAP_001` | lin bleu pâle, ourlets nacrés |
| Lioda 🎭 | `ZONE_PUC_CAP_001` | tissu bariolé de scène |
| Duskarn 🌑 | `ZONE_IMP_CAP_001` | étoffe anthracite, coupe nocturne |
| Granzam ⛏️ | `ZONE_GNO_CAP_001` | toile robuste ocre, renforts cuir |
| Brokkheim 🔨 | `ZONE_LEP_CAP_001` | laine verte d'atelier, tablier court |
| Penwether 🕯️ | `ZONE_SPR_CAP_001` | étoffe patinée, tons sépia |

## 3. Allocation des ID (fermée) — 55 fiches

Pour rester léger (ce sont des T0 quasi identiques), on décline par ville, pas par genre (une même pièce sert aux deux genres sauf la robe) :

| Famille | Plage | Détail |
|---|---|---|
| Hauts | `OFT_TOP_001-011` | 1 t-shirt régional par ville (11) |
| Bas — pantalon | `OFT_BOT_001-011` | 1 pantalon régional par ville (11) |
| Bas — short | `OFT_BOT_012-022` | 1 short régional par ville (11) |
| Bas — robe (F) | `OFT_BOT_023-033` | 1 robe régionale par ville (11) |
| **Réserve** | `OFT_TOP_012-022` | 11 hauts alternatifs (col, manches) pour variété cosmétique — optionnel |

Total ferme : **11 + 33 = 44** obligatoires (+ 11 réserve = 55). Dossier : `données/items_equipements/tenues/` (à créer). Fichiers `oft_top_<nnn>_<ville>.md`, `oft_bot_<nnn>_<ville>_<type>.md`.

## 4. Grille de valeurs (fermée)

| Paramètre | Valeur |
|---|---|
| Tier / Rareté | T0 / Basique |
| Niveau requis | 1 |
| DEF | 2-4 (haut) · 2-4 (bas) — négligeable |
| Durabilité | 100 (négligeable, se rachète) |
| Pénalité de vol | 0% |
| Bonus | **AUCUN** |
| Prix | 20-60 Yrds (achat) · 5-15 (revente) |
| Source | tailleur/fripier de la ville d'apparition (Vosk `NPC_GAT_96`, Ison `NPC_ALN_66`, et l'équivalent de chaque roster) + remise gratuite à la création |

## 5. Gabarit de fiche

Celui du lot tête (`ARM_TET_001`, 5 sections), `Slot` = Torse (haut) / Jambes (bas). Lore (2-3 phrases) : la tenue de départ comme **signe du débutant**, la couleur régionale, le clin d'œil « tout le monde a commencé comme ça ». Intégration Bot : `!equiper OFT_..._<NNN> [torse|jambes]`, `!inspect`, `!sys_give`, `SYS_GRANT_ITEM`. Ajouter une ligne **Attribution création** : `gender` autorisé + ville.

## 6. Chaînage création (note d'architecture — hors générateur)

Le flux de création (`T_AVATARS`) sélectionne la tenue ainsi (acté ici, implémenté par l'Architecte) :
```
à la création :
  ville = current_zone_id (spawn)
  OFT_TOP  = haut régional de la ville
  OFT_BOT  = bas choisi par le joueur parmi {pantalon, short} + {robe si gender='female'}, en variante régionale
  equip_torso ← OFT_TOP ; equip_legs ← OFT_BOT   (2 instances T_INVENTORY, is_equipped=VRAI)
```
Commande de rechange en jeu : `!outfit` (cosmétique, déjà actée) et rachat en boutique.

## 7. Checklist de recette

1. 44 fiches obligatoires (11 hauts + 11 pantalons + 11 shorts + 11 robes) ; séquences sans trou.
2. Robe : les 11 fiches `OFT_BOT_023-033` portent la mention `gender=female` uniquement.
3. Zéro bonus, zéro valeur hors grille §4 ; les 11 villes couvertes pour chaque type.
4. Chaque tenue vendue par le tailleur/fripier réel de sa ville (ou `[BESOIN_PNJ]` pour les villes dont le roster n'est pas encore livré).
5. Index `_index_tenues.md` : table ID | Ville | Type | Slot | Genre.
