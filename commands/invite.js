'use strict';

const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'invite',
  description: 'DESCRIPTION',
  execute: async (client, message, _args, db) => {
    // let tamper = await db.get(`tamper_${message.guild.id}`)
    const embed = new MessageEmbed().setColor(client.color);
    message.channel.send({
      embeds: [
        embed
          .setTitle('Invite Sayori!')
          .setDescription('Sorry, but this bot isn\'t ready yet!'),
      ],
    });
  },
};
