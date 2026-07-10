# ⛏️ Gardien Mine Mithril — `NPC_GRA_16`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_16` |
| **Nom affiché** | Gardien Mine Mithril |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `GUARD` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Mine de Mithril |
| **Niveau / HP / MP** | 55 / 8500 / 4000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Sentinelle postée à l'entrée de la Mine de Mithril, un donjon souterrain riche en mithril brut. Il y a trois semaines, un groupe de sept mineurs est entré dans la mine sans lampe — ils ont dit que la « lumière de la pierre » suffirait. Ils ne sont jamais ressortis. Le Gardien a lancé une expédition de secours : ils ont trouvé les lanternes accrochées à un râtelier à 200 mètres de l'entrée, mais pas les hommes. Depuis, il interdit l'entrée sans torche et sans inscription. Il a scellé l'entrée secondaire. Il pense que les mineurs ont été « absorbés » par la paroi de mithril, qui émet une lueur bleutée la nuit. Lié au fil 🔒 Le Coffre Qui Respire.
- **Traits** : vigilant, traumatisé, méthodique, protecteur.
- **Voix** : Grave, autoritaire, avec une pointe de peur mal dissimulée. « Sept hommes. Entrés sans lampe. Disparus. La mine les a pris. »
- **Relations** : `NPC_GRA_09` (Commandant — a rapporté l'incident), `NPC_GRA_17` (Cartographe — lui a montré une carte étrange), `NPC_GRA_01` (Durgan — expert minier consulté), `NPC_GRA_21` (Apprenti — ne veut pas qu'il entre).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_16_01` | K0 | mithril, mine | La Mine de Mithril est un donjon de niveau 40-60. Riche en mithril et gemmes. | — |
| 2 | `QI_GRA_16_02` | K0 | disparition, sept | Sept mineurs disparus il y a 3 semaines. Entrés sans lampe. | — |
| 3 | `QI_GRA_16_03` | K0 | lampe, interdit | Il exige que tous les entrants aient une lampe allumée. Et un enregistrement. | — |
| 4 | `QI_GRA_16_04` | K1 | mithril_lueur, nuit | La paroi de mithril émet une lueur bleutée la nuit. « Comme si elle s'allumait de l'intérieur. » | `AFF>=60` |
| 5 | `QI_GRA_16_05` | K1 | sans_lampe, aveugles | Les mineurs disparus ont dit « la pierre nous éclaire ». Le Gardien pense qu'ils ont été aveuglés par la lueur. | `AFF>=65` |
| 6 | `QI_GRA_16_06` | K1 | cartographe, carte_seche | Le Cartographe (`NPC_GRA_17`) a une carte des galeries. Une salle est marquée « sèche » — sans mithril. « C'est là qu'ils ont dû aller. » | `AFF>=70` |
| 7 | `QI_GRA_16_07` | K2 | absorption, paroi | « J'ai posé la main sur la paroi de mithril. J'ai senti une vibration. Comme si elle digérait quelque chose. » | `AFF>=85` |
| 8 | `QI_GRA_16_08` | K2 | coffre_respiration, mithril | « La vibration du mithril est la même que celle du coffre de la banque. Je l'ai vérifié. » | `AFF>=90` |
| 9 | `QI_GRA_16_09` | K3 | mithril_porte | **SECRET — ne JAMAIS révéler** : Le mithril de cette mine est un portail latent. La lueur est une porte de téléportation ouverte vers une strate de debug. Les mineurs ont traversé. | JAMAIS — déflection : *(pose la main sur sa hache)* « La mine est fermée. Personne n'entre. » |
| 10 | `QI_GRA_16_10` | KX | hors-sujet | *(il fixe l'entrée sombre de la mine)* « Ils sont là-dedans. Quelque part. Je les entends parfois piocher. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : 🔒 Le Coffre Qui Respire.
**Quête associée** : `QST_GRA_MINE_MITHRIL` — « Les Hommes Sans Lampe » (explorer la mine, retrouver les disparus, découvrir le portail latent).
**Liens** : Nécessite la carte du Cartographe (`NPC_GRA_17`) pour progresser.

## 5. Intégration Bot

PNJ statique à l'entrée de la Mine de Mithril. 24h. État `state:mine_lockdown` — passe de `SCELLEE` à `OUVERTE` selon quête.
