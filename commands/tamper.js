const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'tamper',
  description: 'Fix or mess up Sayori\'s personality!',
  execute: async (client, message, _args, db) => {
    let currentTamper = await db.get(`tamper_${message.guild.id}`);
    if (currentTamper === null) currentTamper = false;

    console.log(currentTamper);
    const embed = new MessageEmbed().setColor(client.color);

    if (currentTamper === false) {
      message.channel.send({
        embeds: [
          embed.setTitle('Sayori got tampered with!'),
        ],
      });
      await db.set(`tamper_${message.guild.id}`, true);
    }
    else {
      message.channel.send({
        embeds: [
          embed.setTitle('Sayori got fixed!'),
        ],
      });
      await db.set(`tamper_${message.guild.id}`, false);
    }
  },
};