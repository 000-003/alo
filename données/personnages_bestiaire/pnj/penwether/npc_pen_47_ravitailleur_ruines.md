# 🕯️ Ravitailleur Ruines — `NPC_PEN_47`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_47` |
| **Nom affiché** | Ravitailleur Ruines |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Provision pour expéditions) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Porche Effondré |
| **Niveau / HP / MP** | 7 / 320 / 300 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ravitailleur au Porche Effondré, le point de départ des expéditions dans les ruines. Il prépare des colis de provisions — eau, nourriture, cordes, lampes. Mais les colis se vident seuls. Il les prépare, il les ferme, et le lendemain ils sont à moitié vides. La nourriture a disparu, l'eau s'est renversée sans trace d'humidité. Il a refait les colis cent fois. Toujours le même résultat. Il livre les colis à moitié vides. Personne ne s'est plaint. Peut-être que personne ne les ouvre. Angle : le colis se vide seul.
- **Traits** : méthodique, contrarié, soupçonne les autres marchands.
- **Voix** : ronchonne, fatiguée. « J'ai préparé 10 colis aujourd'hui. 10. Ce matin, ils étaient pleins. Ce soir, ils sont à moitié vides. Personne n'y touche. Ils se vident. TOUT SEULS. »
- **Relations** : `NPC_PEN_49` (prépare les colis pour ses expéditions) ; `NPC_PEN_45` (lui donne des conseils sur ce qu'emporter dans les ruines) ; `NPC_PEN_48` (soupçonné de voler dans ses colis la nuit).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_47_01` | K0 | ravitaillement, ruines | Colis de provisions pour expéditions : 50 Yrds | — |
| 2 | `QI_PEN_47_02` | K0 | porche, effondre | Posté au Porche Effondré, entrée des ruines | — |
| 3 | `QI_PEN_47_03` | K0 | stock, provisions | Eau, nourriture séchée, cordes, lampes, outils | — |
| 4 | `QI_PEN_47_04` | K1 | colis, vide seul | Les colis se vident tout seuls la nuit | — |
| 5 | `QI_PEN_47_05` | K1 | nourriture, disparait | La nourriture disparaît sans trace — pas de miettes | `AFF>=60` |
| 6 | `QI_PEN_47_06` | K1 | personnes, plaintes | Personne ne s'est plaint de colis à moitié vides | `AFF>=65` |
| 7 | `QI_PEN_47_07` | K2 | colis, consommés | Les provisions sont consommées par le Porche lui-même — il les absorbe | `AFF>=80` |
| 8 | `QI_PEN_47_08` | K2 | porche, entite | Le Porche Effondré est une entité qui se nourrit des offrandes | `AFF>=85` |
| 9 | `QI_PEN_47_09` | K3 | colis, perte simulation | Les provisions ne disparaissent pas — elles sont désallouées de la simulation quand le Cardinal a besoin de mémoire. Le Porche Effondré est un point de collecte de mémoire : les ressources inutilisées sont recyclées par le serveur. Les colis se vident parce que le Cardinal récupère les ressources qu'il juge non critiques pour optimiser la simulation | JAMAIS — déflection : *(il tape sur un colis)* « Plein. Je l'ai préparé y a une heure. *(il l'ouvre — il est à moitié vide)* …Bon. Encore un. *(il referme)* Le client verra pas la différence. Y a jamais de différence. » |
| 10 | `QI_PEN_47_10` | KX | *(hors sujet)* | « Les provisions partent. Les clients paient. Moi, je prépare. C'est un cycle. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!buy_supplies_pen` (achat de provisions), `!prepare_expedition` (préparer expédition).
- Fil **📜 Ruines / 🔮 Ville Fantôme** (Porche = collecteur de mémoire du serveur).
- Fournisseur de `NPC_PEN_49`, lié à `NPC_PEN_45`, `NPC_PEN_48`.

## 5. Intégration Bot

- **Accueil** (`!parler ravitailleur ruines`) : *(Il ficelle un colis)* « Colis prêt. Eau, biscuits, corde. 50 Yrds. *(il soupire)* …Si tu le trouves à moitié vide en arrivant, c'est pas ma faute. C'est le Porche. Il a faim. » |
- `!buy_supplies_pen` — provisions, `!prepare_expedition` — expédition.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « colis désalloués par le Cardinal/récupération de mémoire » réservé à l'orchestrateur.
