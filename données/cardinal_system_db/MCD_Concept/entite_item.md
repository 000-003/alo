# Entité MCD : ITEM (Duplicate de ITEM_DATA — Fusion)

> **NOTE ARCHITECTURALE** : Ce fichier est conservé pour compatibilité mais l'entité
> canonique est `entite_item_data.md`. Les deux fichiers décrivaient la même entité
> avec des niveaux de détail différents. Voir `entite_item_data.md` pour la version
> complète et `entite_inventory_instance.md` pour les instances possédées.

## Redirection

Ce document est un **alias** de [entite_item_data.md](./entite_item_data.md).

L'architecture Cardinal System distingue :
1. **ITEM_DATA** (dictionnaire immuable) → `entite_item_data.md`
2. **INVENTORY_INSTANCE** (copie possédée mutable) → `entite_inventory_instance.md`

Tout attribut d'item doit être ajouté dans `entite_item_data.md`.
Tout attribut de possession (durabilité restante, enchantements appliqués, propriétaire)
doit être ajouté dans `entite_inventory_instance.md`.