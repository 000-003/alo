import logger from '../utils/logger.js';

const TEMPLATES = {
  welcome: `Bienvenue en ALfheim Online, {playerName} !
Tu te trouves à {zoneName}. Tape *!aide* pour voir les commandes disponibles.`,

  move: `Tu te déplaces vers **{destination}** ({distance} km).
⏱ Durée : {time} min | 💧 Coût : {cost} MP
🕐 Arrivée prévue dans {travelTime} min.`,

  move_arrived: `📍 Tu es arrivé à **{zoneName}**.
{description}`,

  buy_success: `🛒 Achat effectué : **{quantity}× {itemName}**
💸 Total : {total} Yrds (dont {tax} Yrds de taxe)
💰 Nouveau solde : {balance} Yrds`,

  buy_fail_insufficient: `❌ Fonds insuffisants.
💰 Prix : {required} Yrds | 💰 Ton solde : {available} Yrds`,

  buy_fail_notfound: `❌ Objet introuvable : "{itemName}".
Vérifie l'ID ou demande la liste des articles au marchand.`,

  sell_success: `💰 Revente réussie : **{quantity}× {itemName}**
💵 Gain : {total} Yrds`,

  sell_fail_insufficient: `❌ Tu ne possèdes pas assez de "{itemName}" ({available} en inventaire).`,

  attack_start: `⚔️ **Combat engagé contre {monsterName}** (Niv.{monsterLevel})
❤️ {monsterName} : {monsterHp} PV
⚡ Lance {skillName} !`,

  attack_damage: `⚡ **{actorName}** inflige **{damage}** dégâts à **{targetName}** !
❤️ {targetName} : {targetHp} PV restants`,

  attack_miss: `⚡ **{actorName}** attaque **{targetName}**... mais **rate** sa cible !`,

  attack_kill: `💀 **{targetName}** a été vaincu !
✨ Récompense : {exp} XP | 💰 {yrds} Yrds`,

  attack_death: `💀 Tu es tombé au combat !
🔄 Téléportation au point de liaison dans 30 secondes...`,

  talk: `🗣️ **{npcName}** : "{dialogue}"`,

  talk_notfound: `👤 "{npcName}" est introuvable dans cette zone.`,

  status: `📋 **Fiche de {playerName}**
━━━━━━━━━━━━━━━━
❤️ PV : {hp}/{hpMax}  💧 MP : {mp}/{mpMax}
📍 Zone : {zoneName}  ⚡ Niveau : {level}
🏷 Race : {race}  💰 Yrds : {yrds}
━━━━━━━━━━━━━━━━`,

  inventory: `🎒 **Inventaire de {playerName}**
{items}`,

  inventory_empty: `🎒 Ton inventaire est vide.`,

  quest_started: `📜 **Nouvelle quête : {questTitle}**
{description}
━━━━━━━━━━━━━━━━
🎯 Objectif : {objective}
🏆 Récompense : {rewardXp} XP | {rewardYrds} Yrds`,

  quest_progress: `📜 **Quête : {questTitle}**
📊 Progression : {progress}/{total}
{stepDescription}`,

  quest_complete: `🎉 **Quête terminée : {questTitle}**
━━━━━━━━━━━━━━━━
✨ +{rewardXp} XP  💰 +{rewardYrds} Yrds{rewardItem}`,

  help: `📖 **Commandes disponibles**
━━━━━━━━━━━━━━━━
🏃 *déplacement* — "je vais [zone]"
🛒 *achat* — "je veux [qté] [item]"
💰 *vente* — "vends [qté] [item]"
⚔️ *combat* — "attaque [monstre]"
💬 *dialogue* — "parle à [pnj]"
📜 *quêtes* — "quête [nom]"
🎒 *inventaire* — "inventaire"
📋 *profil* — "statut"
❓ *aide* — "!aide"
━━━━━━━━━━━━━━━━`,

  error: `❌ Désolé, je n'ai pas compris. Tape *!aide* pour voir les commandes disponibles.`,

  fallback: `🤖 Je suis le Système Cardinal. Je n'ai pas de réponse à ta requête pour le moment.
Les développeurs travaillent sur cette fonctionnalité.`,

  api_busy: `⏳ Le Système Cardinal réfléchit... Patiente un instant.`,

  maintenance: `🔧 Le Système Cardinal est en maintenance. Réessaie dans quelques instants.`,
};

export function render(templateName, variables = {}) {
  const template = TEMPLATES[templateName];
  if (!template) {
    logger.warn('Template inconnu', { templateName });
    return TEMPLATES.error;
  }

  let rendered = template;
  for (const [key, value] of Object.entries(variables)) {
    if (value !== null && value !== undefined) {
      rendered = rendered.replaceAll(`{${key}}`, String(value));
    }
  }

  const missing = rendered.match(/\{(\w+)\}/g);
  if (missing) {
    for (const m of missing) {
      rendered = rendered.replace(m, '???');
    }
  }

  return rendered;
}

export function getTemplate(name) {
  return TEMPLATES[name] || null;
}

export function registerTemplate(name, template) {
  TEMPLATES[name] = template;
}

export default { render, getTemplate, registerTemplate };
