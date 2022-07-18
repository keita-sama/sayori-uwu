'use strict';

const { commands } = require('../data');
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'help',
  execute: async (client, message, args, db) => {
    const cmdArr = [];
    Object.keys(commands).forEach((command, index) => {
      cmdArr.push(`**${command}**: ${Object.values(commands)[index]}`);
    });

    const noArgsEmbed = new MessageEmbed()
      .setTitle('Manual of Sayori.chr!')
      .setDescription(client.description)
      .addFields(
        {
          name: 'Commands',
          value: 'Commands are actions to interact with sayori, either directly or through cmd, to know what commands you can use, write `s_help` commands.',
        },
        {
          name: 'Phrases - {IN DEV}',
          value: 'Phrases are variants of words to talk with sayori, to talk, mention Sayori at the beginning, to know what you can say to Sayori, write `s_help` phrases.',
        },
        {
          name: 'Triggers',
          value: 'Trigger words are words that sayori reacts to, it can be toggled on and off using `s_triggers`, to know what trigger words there are, write `s_help triggers`',
        },
      )
      .setColor(client.color)
      .setFooter({ text: 'Thanks for reading', iconURL: client.user.displayAvatarURL() });
    const commandsEmbed = new MessageEmbed()
      .setTitle('Manual of Sayori.chr! Commands!')
      .setDescription('Commands are actions to interact with Sayori, either directly or through cmd.')
      .addField('Commands', cmdArr.join('\n'))
      .setColor(client.color);

    const phrasesEmbed = new MessageEmbed()
      .setDescription('Hold your horses! This section is still in development!')
      .setColor(client.color);

    const triggerEmbed = new MessageEmbed()
      .setTitle('Manual of Sayori.chr! Triggers!')
      .setDescription('Trigger words are words that sayori reacts to, it can be toggled on and off using s_trigger. (System not implemented yet!)')
      .addField('Triggers', '`cinnamon bun` `breakfast` `hang` `kill`')
      .setColor(client.color);

    if (!args.length) {
      message.channel.send({
        embeds: [
          noArgsEmbed,
        ],
      });
    }
    else if (args[0].toLowerCase() === 'commands') {
      message.channel.send({
        embeds: [
          commandsEmbed,
        ],
      });
    }
    else if (args[0].toLowerCase() === 'phrases') {
      message.channel.send({
        embeds: [
          phrasesEmbed,
        ],
      });
    }
    else if (args[0].toLowerCase() === 'triggers') {
      message.channel.send({
        embeds: [
          triggerEmbed,
        ],
      });
    }
  },
};
