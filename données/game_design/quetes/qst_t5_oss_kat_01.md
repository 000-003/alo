# Le Vol du Ciel Fendu — `QST_T5_OSS_KAT_01`

## Identification
- **QST_ID** : `QST_T5_OSS_KAT_01`
- **Type** : Quête de titre T5 (maîtrise ultime)
- **Skill débloqué** : `OSS_KAT_010` — Amakakeru (T5)
- **Donneur** : `NPC_GAT_31` — Ferra, Maîtresse d'Armes (SKILL_MASTER Katana)
- **Lieu de l'épreuve** : Dojo de Gattan → duel au premier sang
- **Prérequis** : Niveau 45 · Maîtrise d'arme Katana : **Avancé** · OSS T4 Katana maîtrisé
- **Récompense** : 8 000 EXP, 500 Yrds · Titre **« Lame Céleste »** (`!titre_set`) · OSS `OSS_KAT_010` (jamais achetable)

## Déroulement (étapes)
1. Ferra pose l'énigme : Amakakeru est une frappe d'iaijutsu — dégainer, trancher, rengainer en un seul souffle. Tout est dans l'instant *avant* le coup.
2. S'entraîner à la frappe unique sur cibles immobiles jusqu'à supprimer tout mouvement parasite (précision absolue).
3. Duel au premier sang : porter Amakakeru en réaction à l'ouverture adverse, une seule tentative — un échec renvoie à l'étape 2.
4. La frappe parfaite portée, Ferra transmet la technique céleste.

## Dialogues (donneur)
- **Début** : « Le katana ne pardonne pas l'hésitation. Amakakeru, c'est un éclair : si tu penses à le faire, il est déjà trop tard. Tu dégaines, tu tranches, tu rengaines — et le ciel s'est fendu sans que personne n'ait vu la lame. »
- **Fin** : « Je n'ai pas vu ton coup. C'est exactement pour ça qu'il est juste. La Lame Céleste te reconnaît. »

## Notes d'intégration
- Déblocage : `!learn_skill OSS_KAT_010` auprès de `NPC_GAT_31` → `SYS_GRANT_OSS(Avatar_ID, OSS_KAT_010)`.
- Chaînage skills : requiert précision (`PAS_CBT`) ; canon Tsujikaze / Crimson Lotus préservé dans la famille.
- Titre activable par `!titre_set`.
