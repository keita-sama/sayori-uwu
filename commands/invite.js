'use strict';

const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'invite',
  execute: async (client, message, _args, db) => {
    // const tamper = await db.get(`tamper_${message.guild.id}`) ?? false;
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
