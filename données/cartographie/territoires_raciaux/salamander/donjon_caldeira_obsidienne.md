# 🌋 CALDEIRA D'OBSIDIENNE — Donjon Local Salamander

---

## Métadonnées Système Cardinal

| Champ | Valeur |
|---|---|
| **ID Système** | `ZONE_SAL_DUN_001` |
| **Nom Officiel** | Caldeira d'Obsidienne |
| **Surnoms** | « La Gueule du Volcan », « Le Four du Géant » |
| **Type** | Donjon Instancié (groupe de 1-6 joueurs) |
| **Territoire** | Salamander |
| **Safe Zone** | ❌ Non — PK impossible (instancié) mais mort = perte d'XP |
| **Niveau Recommandé** | 20 – 40 |
| **Statut The Seed** | Instance générée par Cardinal — Reset à chaque entrée |

---

## Description Atmosphérique

La Caldeira d'Obsidienne est le cratère intérieur du volcan sur lequel Gattan est bâtie — trois anneaux descendants de verre volcanique noir, poli comme un miroir, où chaque surface renvoie le reflet déformé des intrus. La chaleur y est une entité vivante : le Cardinal maintient une **jauge de Surchauffe** propre à l'instance, qui monte avec l'agitation du groupe et redescend dans le silence. Les vétérans Salamander enseignent la première règle de la Caldeira aux novices : *ici, on parle peu, on frappe juste*. Au fond du cratère brûle la forge originelle qui alimenta la Grande Forge de Gattan — et son dernier gardien.

---

## Météo & Cycle Jour/Nuit

| Paramètre | Valeur |
|---|---|
| **Météo Intérieure** | Fournaise close — colonnes de vapeur, pluies d'étincelles |
| **Luminosité** | Lueur magmatique constante — reflets trompeurs sur l'obsidienne |
| **Effets Spéciaux** | Jauge de Surchauffe (mécanique signature, voir ci-dessous) |
| **Température Simulée** | 60°C – 90°C — Résistance au Feu Lv.10+ fortement conseillée |

---

## 🔥 Mécanique Signature — La Jauge de Surchauffe (décision D11)

> Exploitation native de WhatsApp : la Caldeira punit le **spam** (miroir de la jauge de Vacarme Imp, qui punit les MAJUSCULES).

| Paramètre | Valeur |
|---|---|
| **Jauge** | 0 → 100 points de Chaleur, partagée par toute l'instance |
| **Montée** | +2 Chaleur par message envoyé dans le groupe (toutes commandes et RP confondus) |
| **Descente** | −5 Chaleur par tranche de 30 s sans aucun message |
| **Palier 60** | Le bot annonce « *L'obsidienne se met à suinter…* » (+5% dégâts de feu subis) |
| **Palier 100** | **Éruption** : 800 dégâts de feu à tout le groupe + renvoi à l'étage 1 (l'instance n'est pas reset) |
| **Pilotage** | Paramètre d'environnement `HEAT` — GM `!sys_env_set`, IA `SYS_SET_ENV_HAZARD` |

Effet de design : les groupes doivent **coordonner leurs actions en peu de messages** — anti-spam structurel (ENF-02) transformé en gameplay.

---

## Structure du Donjon

### Anneau 1 — Les Coulées Vitrifiées (Lv.20-25)
- **Mobs** : Élémentaire de Lave (×6), Spectre de Flamme (×5)
- **Mécanisme** : Les parois-miroirs dupliquent visuellement les mobs — `!analyze` révèle les vrais des reflets
- **Piège** : Plaques d'obsidienne chauffées à blanc (200 dégâts, repérables au reflet rougeoyant)

### Anneau 2 — La Forge du Géant (Lv.25-35)
- **Mobs** : Golem d'Obsidienne (×5), Chien Infernal Alpha (×4)
- **Mécanisme** : Actionner 3 soufflets de forge dans l'ordre (indices gravés en runes — `!inspect` requis) pour ouvrir la descente
- **Mini-Boss** : Gardien de Scories (HP: 26000, Lv.32) — construct laissé par les géants de feu
  - Drop : Noyau de Scories, Plaque d'Obsidienne Forgée

### Anneau 3 — Le Cœur de la Caldeira (Lv.35-40)
- **Mobs** : Salamandre Ancestrale (×3)
- **Boss Final** : **Logi, le Dernier Géant de Braise**

---

## Boss Final — Logi, le Dernier Géant de Braise

| Attribut | Valeur |
|---|---|
| **ID** | `BOSS_SAL_DUN_001` |
| **Niveau** | 40 |
| **HP** | 140 000 |
| **Barres de HP** | 4 barres |
| **Attaques** | Marteau de Magma (ligne), Souffle de Fournaise (cône), Pluie d'Obsidienne (AoE aléatoire), Étreinte du Four (grab mono-cible) |
| **Phase 2 (50% HP)** | Frappe son enclume — la jauge de Surchauffe monte passivement (+1/10 s) |
| **Phase 3 (25% HP)** | Brise les parois-miroirs — chaque éclat renvoie un « Reflet de Logi » (HP: 5000) à détruire |
| **Faiblesse** | Magie d'Eau (vapeur = −1 barre de vitesse), attaques pendant son cycle de forge (canalisation 5 s) |
| **Résistance** | Feu (immunité totale), armes de siège physiques (30% réduction) |

### Table de Drop — Logi

| Item | Rareté | Taux de Drop |
|---|---|---|
| Tablier d'Obsidienne (armure, +20% résistance Feu) | Épique | 10% |
| Rune de Forge Ancienne (amélioration d'arme garantie +1) | Rare | 25% |
| Cristal de Donjon (monnaie) | Commun | 100% (×5-10) |

*Marteau du Géant et Cœur de Braise : retirés du roll aveugle de fin de combat — voir Parties Récoltables ci-dessous (D78).*

### Parties Récoltables (D78)

> Dépeçage déterministe (moteur L1) : le franchissement du seuil de dégâts déclenche un roll **garanti** sur la table dédiée, indépendant du roll de fin de combat. Seuils = phases déjà définies ci-dessus (aucun nouveau nombre introduit). Taux inchangés (D73), simplement retirés du roll aveugle.

| Partie | Seuil | Item lié | Rareté | Taux |
|---|---|---|---|---|
| Bras-Enclume | 50% HP (Phase 2 — « frappe son enclume ») | Marteau du Géant | Épique | 15% |
| Fournaise Interne | 25% HP (Phase 3 — parois-miroirs brisées) | Cœur de Braise | Légendaire | 3% |

---

## Zones Connectées

| Destination | ID Zone | Commande | Coût MP | Temps de Trajet |
|---|---|---|---|---|
| Gattan (sortie du donjon) | `ZONE_SAL_CAP_001` | `!sortir` | 0 MP | Instantané |
| Désolation de Magma | `ZONE_SAL_HUNT_002` | `!sortir` puis `!marcher sud` | 0 MP | 5 min |

---

## Récompenses de Complétion

| Récompense | Condition |
|---|---|
| 5500 XP | Première complétion |
| Titre « Maître du Silence Ardent » | Vaincre Logi sans jamais dépasser 60 de Surchauffe |
| Accès à la quête « La Voie du Guerrier II » | Complétion + Cœur de Braise |
| 2200 Yrd | À chaque complétion |

---

## Lore / Histoire

Quand les géants de feu de Jötunheimr furent repoussés par les Salamander (bataille qui créa la Désolation de Magma), l'un d'eux ne repartit pas : Logi, forgeron de son peuple, refusa d'abandonner sa forge creusée au cœur du volcan. C'est sa fournaise qui, canalisée par les premiers artisans de Gattan, alimente la Grande Forge depuis des générations — un secret que le clergé de la Forge tait soigneusement : l'arme de chaque Salamander doit sa trempe au feu d'un ennemi héréditaire. Le Maître-Forgeron Kagemune descend une fois l'an dans la Caldeira. Personne ne sait ce qu'ils se disent.

---

## WhatsApp Group Metadata

| Champ | Valeur |
|---|---|
| **Nom du Groupe** | `🌋 Caldeira d'Obsidienne — Lv.20-40` |
| **Description du Groupe** | `Donjon instancié Salamander. 👥 1-6 joueurs. Boss: Logi le Géant de Braise (Lv.40). !dungeon_queue pour entrer. 🔥 Jauge de Surchauffe: chaque message chauffe la caldeira. ⚠️ Mort = perte de 5% XP.` |
| **Règles Affichées** | `1. Formez un groupe avant d'entrer. 2. CHAQUE MESSAGE CHAUFFE LA CALDEIRA — parlez peu, frappez juste. 3. À 100 de Surchauffe: éruption et retour à l'anneau 1.` |

---

> *« La forge n'écoute pas les bavards. Elle écoute le marteau. »* — Logi, le Dernier Géant de Braise
