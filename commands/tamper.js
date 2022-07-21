'use strict';

const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'tamper',
  execute: async (client, message, _args, db) => {
    const currentTamper = await db.get(`tamper_${message.guild.id}`) ?? false;
    const embed = new MessageEmbed().setColor(client.color);

    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.channel.send({
        embeds: [
          embed.setTitle('You have no permission to do that!'),
        ],
      });
    }
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