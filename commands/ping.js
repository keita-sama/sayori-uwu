'use strict';

const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ping',
  description: '',
  execute: async (client, message, _args, db) => {
    // const tamper = await db.get(`tamper_${message.guild.id}`)
    // if (tamper === null) tamper = false
    const embed = new MessageEmbed().setColor(client.color);
    message.channel.send({
      embeds: [
        embed.addFields({
          name: 'Pong! :ping_pong:',
          value: `\`${client.ws.ping.toString()}ms\``,
        }),
      ],
    });
  },
};
