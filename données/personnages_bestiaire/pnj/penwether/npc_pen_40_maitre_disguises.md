# 🕯️ Maître Disguises — `NPC_PEN_40`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_40` |
| **Nom affiché** | Maître Disguises |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` (Déguisements) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Atelier Visages |
| **Niveau / HP / MP** | 50 / 6 000 / 4 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Maître des déguisements à l'Atelier Visages. Il confectionne des apparences — des visages, des corps, des voix. Mais son chef-d'œuvre — un déguisement de Kirito — est devenu trop réel. Celui qui le porte devient Kirito. Pas seulement l'apparence : les souvenirs, la voix, la façon de marcher. Il l'a testé sur un volontaire qui est resté Kirito trois jours avant de revenir. Depuis, le déguisement est enfermé dans un coffre scellé sous l'Atelier. Il a peur que quelqu'un le trouve et l'enfile. Il porte lui-même un masque qui n'est pas le sien, et il a oublié son vrai visage. Angle : déguisement trop réel — lié au fil Statue de Kirito.
- **Traits** : artiste torturé, perfectionniste, ne se souvient pas de son vrai visage.
- **Voix** : changeante, s'adapte à son interlocuteur. « Quel visage veux-tu porter aujourd'hui ? J'en ai des centaines. Mais attention — certains visages, tu ne pourras plus les enlever. »
- **Relations** : `NPC_PEN_33` (lui fournit des masques de base) ; `NPC_PEN_41` (collègue déguiseur) ; `NPC_PEN_42` (lui fournit des tissus d'illusion) ; `NPC_PEN_43` (lui fournit des vernis de fixation) ; `NPC_PEN_44` (crée des odeurs pour ses déguisements).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_40_01` | K0 | deguisements, atelier | Maître des déguisements à l'Atelier Visages | — |
| 2 | `QI_PEN_40_02` | K0 | skill, formation | Formation au déguisement : 200 Yrds/niveau | — |
| 3 | `QI_PEN_40_03` | K0 | visages, stock | Des centaines de visages en réserve, peaux, masques, prothèses | — |
| 4 | `QI_PEN_40_04` | K1 | deguisement, kirito | Un déguisement de Kirito trop réel — change l'identité | — |
| 5 | `QI_PEN_40_05` | K1 | test, volontaire | Un volontaire est resté Kirito 3 jours | `AFF>=60` |
| 6 | `QI_PEN_40_06` | K1 | oubli, visage | Il a oublié son vrai visage — porte un masque permanent | `AFF>=65` |
| 7 | `QI_PEN_40_07` | K2 | deguisement, statue | Le déguisement Kirito est lié à la Statue de Kirito `NPC_PEN_XX` (non-compilé) — les deux partagent la même identité | `AFF>=80` |
| 8 | `QI_PEN_40_08` | K2 | coffre, scelle | Le coffre est scellé sous l'Atelier — seule sa clé ouvre le cadenas | `AFF>=85` |
| 9 | `QI_PEN_40_09` | K3 | deguisement, identite | Le déguisement de Kirito n'est pas un vêtement — c'est un transfert d'identité. La Statue de Kirito (non-compilée) est le modèle. Quiconque porte le déguisement devient une copie de la statue. Le vrai Kirito est peut-être déjà dans cette statue, et le déguisement est la seule façon d'extraire son identité | JAMAIS — déflection : *(il se touche le visage)* « Mon visage ? Il est quelque part dans l'atelier. Sur un mannequin. Ou dans un tiroir. Je le retrouverai quand j'aurai fini de créer tous les autres. » *(il rit, mais son rire n'est pas le sien)* |
| 10 | `QI_PEN_40_10` | KX | *(hors sujet)* | « Un visage n'est qu'un masque qu'on porte depuis la naissance. » | — |

## 4. Chaînage économique & quêtes

- **Skill Master** : `!skill_disguise_pen` (formation déguisement), `!craft_disguise` (création de déguisement).
- Fil **🪞 Statue de Kirito** avec la statue non-compilée et `NPC_SWI_03`.
- Porteur du fil **🪞 Statue de Kirito** : déguisement trop réel.
- Client de `NPC_PEN_33`, `NPC_PEN_41`, `NPC_PEN_42`, `NPC_PEN_43`, `NPC_PEN_44`.

## 5. Intégration Bot

- **Accueil** (`!parler maitre disguises`) : *(Il te regarde, incline la tête)* « Ton visage est bien. Mais je peux le rendre meilleur. Plus intéressant. Plus vrai. » *(il touche son propre visage)* « Le mien ? Il est dans le lot. Quelque part. » |
- `!skill_disguise_pen` — formation, `!craft_disguise` — création.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « déguisement = transfert d'identité/extraire Kirito de la statue » réservé à l'orchestrateur.
