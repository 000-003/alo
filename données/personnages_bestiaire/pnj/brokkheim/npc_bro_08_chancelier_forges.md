# 🔨 Chancelier Forges — `NPC_BRO_08`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_08` |
| **Nom affiché** | Chancelier Forges |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `LORD` (Régent des Forges) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Conseil des Guildes |
| **Niveau / HP / MP** | 75 / 15 000 / 10 000 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Le Chancelier des Forges est le véritable dirigeant de Brokkheim — le Lord `NPC_BRO_07` est l'image, lui est la main. Il gère le Conseil des Guildes, arbitre les conflits entre forgerons, signe les traités commerciaux avec les autres capitales. Il est né Leprechaun, mais son cœur bat à un rythme qui n'est pas tout à fait naturel. Quand il parle, on entend parfois un second battement, plus profond, sous sa voix. C'est le Pouls `NPC_BRO_00` — qui bat dans sa poitrine. Le Chancelier ne l'a jamais dit à personne, mais il a accepté de porter le rythme de Brokkheim dans son corps pour prouver sa loyauté. Un pacte ancien, signé avec Brokk III. Depuis, il ne dort plus que trois heures par nuit — le Pouls ne s'arrête jamais.
- **Traits** : pragmatique, solide, inflexible ; sa main droite tremble légèrement en synchronisation avec le Pouls.
- **Voix** : grave, autoritaire, mais avec une fatigue qu'il ne cache pas toujours. « Le Conseil a parlé. Les forges continuent. Nous n'avons pas le luxe de l'incertitude. »
- **Relations** : Lord Leprechaun `NPC_BRO_07` (l'image qu'il sert) ; Le Pouls `NPC_BRO_00` (bat dans sa poitrine) ; Brokk IX `NPC_BRO_01` (frère de sang — ils ont le même rythme) ; Commandant Gardes `NPC_BRO_09` (exécute ses ordres) ; Mémoire `NPC_BRO_99` (sait que le Chancelier porte le Pouls) ; Espion Granzam `NPC_BRO_87` (surveillé de près).

## 3. Quantité Informationnelle (budget 12)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_08_01` | K0 | conseil, guildes | Il préside le Conseil des Guildes — toutes les décisions politiques passent par lui | — |
| 2 | `QI_BRO_08_02` | K0 | regent, gestion | Il gère Brokkheim au quotidien — le Lord `NPC_BRO_07` est l'image, il est la main | — |
| 3 | `QI_BRO_08_03` | K0 | traites, capitales | Il signe les traités commerciaux avec les autres capitales | — |
| 4 | `QI_BRO_08_04` | K1 | pouls, poitrine | Un second battement résonne sous sa voix — le Pouls vibre dans sa cage thoracique | `AFF>=60` |
| 5 | `QI_BRO_08_05` | K1 | pacte, brokk III | Il a signé un pacte avec Brokk III pour porter le Pouls dans son corps — prouver sa loyauté | `AFF>=65` |
| 6 | `QI_BRO_08_06` | K1 | sommeil, insomnie | Il ne dort que trois heures par nuit — « Le Pouls ne s'arrête pas. Je ne peux pas m'arrêter non plus. » | — |
| 7 | `QI_BRO_08_07` | K2 | succession, lord | Il sait que le Lord est une projection — si le Lord disparaît, le Conseil devient l'autorité unique | `AFF>=85` |
| 8 | `QI_BRO_08_08` | K2 | espion, granzam | Il surveille l'Espion Granzam `NPC_BRO_87` — il sait qu'il travaille pour la mine de Granzam | `QUEST:QST_BRO_RIVALITE_01` |
| 9 | `QI_BRO_08_09` | K2 | main, tremblement | Sa main droite tremble en rythme avec le Pouls — une synchronisation parfaite qui le trahit | `AFF>=90` |
| 10 | `QI_BRO_08_10` | K3 | pouls, charge, mort | Le Pouls use son corps. Chaque battement le consume un peu plus. Il le sait. Il a accepté. « Un jour le Pouls s'arrêtera dans ma poitrine. Ce jour-là, Brokkheim aura un nouveau Chancelier. J'espère juste qu'il sera prêt. » | JAMAIS — déflection : *(il pose la main sur sa poitrine, ferme les yeux, compte trois secondes)* « … Le rythme est stable. Parle vite. » |
| 11 | `QI_BRO_08_11` | K3 | cardinal, regence | Le Chancelier est le seul à connaître le protocole « Veuf du Cardinal » — une ligne de conduite si le Lord `NPC_BRO_07` (l'interface Cardinal) venait à disparaître. Il doit alors activer le sceau de Brokkheim et couper la zone du réseau des capitales | JAMAIS — déflection : *(il marque un temps d'arrêt, ses yeux deviennent vagues)* « Il y a des procédures que je ne peux pas partager. Même avec toi. Surtout avec toi. » |
| 12 | `QI_BRO_08_12` | KX | *(hors sujet)* | *(Il signe un parchemin sans te regarder)* « Si ce n'est pas une affaire de forges, ce n'est pas mon affaire. Va voir le Marchand Rune. » | — |

## 4. Chaînage économique & quêtes

- **Lord politique** : `!council_petition` (pétition au Conseil), `!treaty_info` (infos traités).
- Porteur du fil **🔮 L'Enclume du Cardinal** et du **⛏️ La Rivalité des Mineurs** avec `NPC_BRO_87`.
- Donneur de `QST_BRO_RIVALITE_01` (quête sur l'espion Granzam).

## 5. Intégration Bot

- **Accueil** (`!parler chancelier forges`) : *(assis sur le trône de régence, il te regarde sans bouger. Un battement sous sa voix.)* « Le Conseil t'écoute. Mais je te préviens : je n'ai pas beaucoup de temps. Le Pouls non plus. »
- `!council_petition` (soumission au Conseil), `!treaty_info` (traités).
- `SYS_NPC_DIALOGUE` : scope = slots 1-9 (+K2 débloqués).
- `NPC_SECRET_PROBED` slots 10-11 : hooks « mort programmée du Chancelier » et « protocole Veuf du Cardinal » réservés à l'orchestrateur.
