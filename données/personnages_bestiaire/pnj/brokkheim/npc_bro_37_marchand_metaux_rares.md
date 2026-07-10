# 🔨 Marchand de Métaux Rares — `NPC_BRO_37`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_37` |
| **Nom affiché** | Marchand de Métaux Rares |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (métaux exotiques, lingots rares) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle du Marteau |
| **Niveau / HP / MP** | 21 / 1 400 / 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Importe et vend des métaux exotiques de tout le continent : mithril des montagnes, fer stellaire, cuivre des abysses, adamantium. Son étal est le plus fréquenté de la Halle. Mais un lingot dans sa réserve personnelle — un métal noir qu'il a acheté à un mineur inconnu — est brûlant au toucher. Brûlant depuis trois semaines. Il ne refroidit pas. Il le garde dans un bac d'eau des canaux, mais l'eau bout. Angle : le lingot trop chaud vient d'une veine au contact du Cœur du Pouls.
- **Traits** : commerçant cosmopolite, ambitieux, prudent avec les inconnus.
- **Voix** : chaude, commerçante, change de langue selon le client (« Mithril des Hautes-Tours, pur à 96 %, garanti sans éclats. Pour vous, 800 Yrds. »).
- **Relations** : `NPC_BRO_35` (lui vend des alliages rares) ; `NPC_BRO_34` (gemmes — cadre ses métaux) ; `NPC_BRO_40` (lui achète les métaux pour finitions) ; `NPC_BRO_33` (outils pour travailler les métaux rares).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_37_01` | K0 | metaux, catalogue | Mithril, fer stellaire, cuivre abyssal : 100-5000 Yrds | — |
| 2 | `QI_BRO_37_02` | K0 | import, provenance | Provenances : Gattan, Granzam, Hautes-Tours, Sylphe | — |
| 3 | `QI_BRO_37_03` | K0 | lingots, qualite | Qualités des lingots, pureté, certification | — |
| 4 | `QI_BRO_37_04` | K1 | lingot, chaud | Un lingot noir dans sa réserve brûle depuis 3 semaines — ne refroidit pas | — |
| 5 | `QI_BRO_37_05` | K1 | eau, bout | L'eau des canaux bout au contact du lingot — il le change toutes les heures | `AFF>=60` |
| 6 | `QI_BRO_37_06` | K1 | vendeur, masque | Le mineur qui lui a vendu le lingot portait un masque — il n'a pas vu son visage | `AFF>=65` |
| 7 | `QI_BRO_37_07` | K2 | lingot, marque | Le lingot porte une marque : trois enclumes en cercle — sceau du Cardinal | `AFF>=80` |
| 8 | `QI_BRO_37_08` | K2 | veine, profondeur | La veine d'origine est sous le Grand Geyser, zone interdite — accessible par les canaux | `AFF>=85+QUEST:QST_BRO_POULS_01` |
| 9 | `QI_BRO_37_09` | K3 | lingot, coeur pouls | Le lingot est un fragment du Cœur du Pouls — la source de chaleur primordiale des forges. Il est « trop chaud » parce qu'il est encore connecté au cœur de la forge cardinale, à des kilomètres sous Brokkheim. Il ne refroidira jamais tant que le Pouls bat | JAMAIS — déflection : *(il recule quand vous approchez du bac)* « C'est juste un métal rare. Très rare. Très chaud. C'est tout. Je l'ai acheté, je le vends. Pas de questions. » |
| 10 | `QI_BRO_37_10` | KX | *(hors sujet)* | « Le métal le plus rare n'est pas le plus cher. C'est celui qui te brûle quand tu le touches. » | — |

## 4. Chaînage économique & quêtes

- **Marchand de métaux** : `!buy_rare_metals` (métaux rares, lingots).
- Fil **Le Pouls** (lingot = fragment du Cœur du Pouls).
- Quête `QST_BRO_POULS_03` : enquêter sur la veine sous le Grand Geyser.

## 5. Intégration Bot

- **Accueil** (`!parler metaux_rares`) : *« Tu cherches du mithril ? De l'adamantium ? J'ai ce qu'il y a de mieux. Mais touche pas au bac noir. »*
- `!buy_rare_metals` — catalogue des métaux.
- `NPC_SECRET_PROBED` slot 9 : hook « lingot/Cœur du Pouls » pour l'orchestrateur.
