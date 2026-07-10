# 💍 CDC-ACC-01 — Accessoires — ❌ GELÉ (D39 caduque, directive PE 2026-07-08)

> **Statut : HORS PÉRIMÈTRE — ne pas produire.**
> Directive PE du 2026-07-08 : l'équipement porté du personnage = **5 slots d'armure (tête, torse, bras, taille, jambes), pas plus**. Les mains saisissent des objets, le dos porte un sac de stockage (`BAG_*`, cadré en annexe 4-bis de `02_cdc_items.md`). Il n'existe **aucun slot** pour anneaux, colliers, ceintures ou capes → un lot de 100 accessoires à bonus de stats n'a plus de support mécanique.

## Conséquences actées

1. La version antérieure de ce CDC (lot `ACC_*` 30/30/20/20, décision D39) est **caduque**.
2. Les 14 fichiers junk existants (`accessoires/anneaux|capes|ceintures|colliers/`) → `ressources_brutes/deprecated_v1/accessoires/`. Les dossiers restent en place, vides.
3. Le chantier « ≥100 par type » ne s'applique plus au type accessoires (dérogation PE).
4. La fonction « extension de capacité » (ex-ceintures) est reprise par les **sacs de dos** `BAG_001-012`.
5. La fonction « cosmétique » (ex-capes d'apparat) reste couverte par `!outfit` (Zinna `NPC_GAT_95`, Vane `NPC_ALN_65`) — pur cosmétique, zéro stat, hors lot.

## Réversibilité

Si le PE réintroduit un jour des bijoux, ce sera comme **objets de valeur non équipables** (économie : joaillières Onya `NPC_GAT_48`, Vireth `NPC_ALN_34`, Belle `NPC_SWI_24` ; cadeaux d'affinité PNJ ; recel) — jamais comme équipement à stats. Un nouveau CDC sera écrit à ce moment-là ; celui-ci reste en place comme trace de décision.
