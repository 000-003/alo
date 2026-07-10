# Rituel Nocturne

## Identification Cardinal
- **Skill_ID** : `OSS_DAG_010`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Dague
- **Tier** : T4 · **Rareté** : Légendaire

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 82 |
| Coût Stamina | 66% de la jauge |
| Nombre de Hits | 10 |
| Multiplicateur Total | ×5.5 |
| Post-Motion Delay | 3.0s (le joueur est vulnérable) |
| Niveau Requis | 44 |
| Déblocage | Maîtrise Avancé + Quête « Les Douze Coups de Minuit » |

## Séquence d'Animation
En pleine nuit (ou en zone sombre), le joueur exécute dix coups rituels. Chaque impact est synchronisé avec un carillon spectral. Le dernier coup libère une onde noire.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Avancé + Quête « Les Douze Coups de Minuit »
- **Commande** : `!learn_skill OSS_DAG_010` puis `!cast rituel_nocturne` en combat

## Lore (Encyclopédie d'Argo)
Un skill qui ne peut être utilisé que la nuit. Les joueurs ont remarqué qu'il est plus puissant lors de la nouvelle lune. Coïncidence ? Probablement pas.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_DAG_010')`
