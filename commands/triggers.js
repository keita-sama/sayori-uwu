'use strict';

const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'triggers',
  execute: async (client, message, _args, db) => {
    const trigger = await db.get(`triggers_${message.guild.id}`) ?? true;
    const embed = new MessageEmbed().setColor(client.color);

    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.channel.send({
        embeds: [
          embed.setTitle('You have no permission to do that!')
        ]
      })
    }
    if (trigger === false) {
      message.channel.send({
        embeds: [
          embed.setTitle('Triggers have been enabled'),
        ],
      });
      await db.set(`triggers_${message.guild.id}`, true);
    }
    else {
      message.channel.send({
        embeds: [
          embed.setTitle('Triggers have been disabled!'),
        ],
      });
      await db.set(`triggers_${message.guild.id}`, false);
    }
  },
};