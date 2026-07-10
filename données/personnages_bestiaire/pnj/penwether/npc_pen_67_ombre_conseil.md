# 🕯️ Ombre Conseil — `NPC_PEN_67`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_67` |
| **Nom affiché** | Ombre Conseil |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_SPR_CAP_001E` — Penwether, Salle Conseil Voilé |
| **Niveau / HP / MP** | 25 / 1 200 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : L'Ombre Conseil est l'espion officieux du Conseil — mais personne ne sait qu'il est l'ombre. Il porte un masque noir sans trait, sans bouche, sans yeux. Il voit parfaitement. Il se tient dans les coins, derrière les rideaux, dans l'angle mort de chaque pièce. Il ne parle presque jamais. Mais il sait tout : qui entre, qui sort, qui complote, qui ment. La vérité est plus inquiétante : l'Ombre Conseil n'est pas un espion. Il est le *vrai* Chancelier. Le Chancelier Masques `NPC_PEN_07` est un leurre, un pantin qui reset toutes les strates. L'Ombre Conseil tire les ficelles depuis le début. Il est le seul à n'avoir jamais reset.
- **Traits** : silencieux, immobile, attentif, ne cligne jamais des yeux.
- **Voix** : chuchotement à peine audible. « *Le Chancelier parle. Le Chancelier décide. Le Chancelier signe. Mais le Chancelier oublie. Moi, j'oublie pas. Je suis là avant lui. Je serai là après.* »
- **Relations** : Chancelier Masques `NPC_PEN_07` (son pantin) ; Dame Compagnie `NPC_PEN_65` (elle a peut-être senti quelque chose — il l'observe) ; Huissier Conseil `NPC_PEN_61` (le seul qui voit son visage sous le masque noir) ; Fou Conseil `NPC_PEN_68` (le Fou sait tout mais ne le dit pas).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_67_01` | K0 | ombre, conseil | Il est l'espion du Conseil — personne ne sait qui il est vraiment | — |
| 2 | `QI_PEN_67_02` | K0 | masque, noir | Son masque est noir, sans yeux, sans bouche — il voit et parle à travers | — |
| 3 | `QI_PEN_67_03` | K0 | ombre, partout | Il se déplace dans les angles morts — personne ne le voit arriver | — |
| 4 | `QI_PEN_67_04` | K1 | chancelier, pantin | Le Chancelier Masques `NPC_PEN_07` est un leurre — l'Ombre Conseil prend les vraies décisions | `AFF>=50` |
| 5 | `QI_PEN_67_05` | K1 | reset, immunite | L'Ombre n'a jamais reset — il est le même depuis le début | `AFF>=65` |
| 6 | `QI_PEN_67_06` | K1 | savoir, tout | Il connaît chaque secret du Conseil — il les a écrits dans un livre qu'il garde sur lui | — |
| 7 | `QI_PEN_67_07` | K2 | livre, secrets | Le livre contient les noms de tous ceux qui ont trahi le Conseil — et ce qu'ils sont devenus | `AFF>=75` |
| 8 | `QI_PEN_67_08` | K2 | visage, connu | Sous le masque noir, il a le même visage que le Chancelier — mais plus vieux, plus usé | `QUEST:QST_PEN_OMBRE_01` |
| 9 | `QI_PEN_67_09` | K3 | ombre, origine | L'Ombre Conseil est la première instance du Chancelier — avant que le système de reset ne soit activé. Il est resté, les copies ont été réinitialisées | JAMAIS — déflection : *(il retire son masque noir — en dessous, un autre masque noir)* « Tu crois que le masque cache le visage. Mais c'est le visage qui cache l'absence de visage. J'ai pas de visage. J'ai toujours été l'ombre. » |
| 10 | `QI_PEN_67_10` | KX | *(dans l'ombre)* | *(il disparaît dans un coin de la pièce sans un bruit)* « Je suis là. Je suis toujours là. Même quand tu ne me vois pas. Surtout quand tu ne me vois pas. » | — |

## 4. Chaînage économique & quêtes

- **Quête** : `QST_PEN_OMBRE_01` — Découvrir qui est vraiment l'Ombre Conseil et pourquoi le Chancelier reset.
- **Fils rouges** : 🔑 Pacte Ombres (l'Ombre est le vrai pouvoir), 🔮 Ville Fantôme (première instance du Chancelier), 🎭 Illusions (le Chancelier est l'illusion, l'Ombre est la réalité).

## 5. Intégration Bot

- **Accueil** (`!parler ombre_conseil`) : *« … … … »* (un temps très long) *« …tu cherches quelque chose. Et tu crois que le Chancelier peut te le donner. Il peut pas. Reviens me voir quand tu auras compris qui commande. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
