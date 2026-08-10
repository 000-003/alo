# Wiki ALfheim Online - The Skull Reaper (Boss du Palier 75)

## 1. Lore et Histoire (Background)
The Skull Reaper est le boss le plus meurtrier de l'histoire de SAO : une entité **squelettique gigantesque en forme de mille-pattes**, dotée de deux immenses **faux d'os** et d'un crâne évidé. Lors du combat de clearing d'origine, ses attaques instantanément létales tuèrent **quatorze joueurs** en quelques secondes — le raid ne survécut que grâce à l'intervention de Heathcliff, dont l'invulnérabilité anormale trahit peu après sa véritable identité : Akihiko Kayaba, le créateur. Dans New Aincrad, le Skull Reaper reste le contrôle final avant l'ascension vers les derniers paliers : le boss qui rappelle que la mort virtuelle a un poids narratif.

## 2. Apparitions
- **Lieu d'apparition** : Salle du Boss scellée, `ZONE_AIN_FLR_075`.
- **Condition de rencontre** : Palier 74 (The Gleam Eyes) vaincu ; raid pleine échelle **obligatoire**.

## 3. Statistiques RPG (Fandom Stats)
- **ID Monstre** : `BOSS_AIN_075`
- **Catégorie** : Floor Boss (Palier 75 — unique par serveur, réputé « tueur de raid »)
- **Niveau Estimé** : 90
- **Hit Points (HP)** : 5 Barres (~7 000 000 HP).
- **STR** : 2 100 · **AGI** : 1 200 (bras indépendants) · **VIT** : 1 000.
- **Résistances** : immunité aux altérations (poison/paralysie/sommeil). **Faiblesses** : Lumière sacrée, dégâts contondants sur le crâne.

## 4. Mécaniques de Combat et Patterns
1. **Double Faux Simultanée** : les deux bras attaquent **deux cibles différentes** au même instant, chacun capable d'un quasi-one-shot — impose deux tanks coordonnés (la leçon des 14 morts).
2. **Onde de Fauchage** : balayage bas à esquiver par un saut au timing exact (parenté avec la Frappe Sismique de Thrym).
3. **Cliquetis d'Os** : à mi-combat, se scinde en segments qui attaquent en tenaille ; le raid doit se répartir ou être encerclé.
4. **Pas de phase d'enrage classique** : la létalité est constante du début à la fin — c'est un test de **discipline**, pas de burst.

## 5. Loot et Conséquences
- **Drop Assuré** : Yrds de palier + Gemme du Palier 75.
- **Conséquence** : ouverture vers `ZONE_AIN_FLR_076` ; jalon narratif « la vérité derrière le jeu » (fil méta, révélation réservée orchestrateur, règle D22).
- **Intégration Bot** : `!sys_spawn_boss [Group_ID] BOSS_AIN_075` · `SYS_GRANT_ITEM`. Aucune commande nouvelle.

### Parties Récoltables (D78)

> Formalisation du Last Attack Bonus existant dans le schéma D78 — aucun nouvel item. Ce boss n'a pas de phase d'enrage classique (design intentionnel, « test de discipline, pas de burst » — cf. §4) : le seuil retenu est le seul point de repère décrit, pas une barre de HP inventée.

| Partie | Seuil | Récompense | Attribution |
|---|---|---|---|
| Segments d'Os (scission en tenaille) | Mi-combat (« Cliquetis d'Os », cf. §4.3) | Composant d'arme légendaire lié (`WPN_LEG_*`) | Porteur du coup final dans cette fenêtre |
