'use strict';

const { db } = require('../index');
const { handlePrefixes } = require('../misc/functions');
const { trigger } = require('../data');

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
        if (message.author.bot) return;
        if (message.client.devMode && !message.client.developers.includes(message.author.id)) return message.channel.send('Sorry, but I\'m currently in Developer mode!');
        if (!message.client.prefixes.some(pre => message.content.toLowerCase().startsWith(pre))) {
            const triggerState = await db.get(`triggers_${message.guild.id}`) ?? true;
            const trigger = trigger(message.content.toLowerCase())
            if (trigger === 'None' || triggerState === false) return;
            return message.channel.send({
              content: trigger,
            });
        }
        else {
            const args = message.content.slice(handlePrefixes(message.client.prefixes, message.content).length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();
            const client = message.client;
            const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

            if (!command) return;

            try {
                command.execute(client, message, args, db);
            }
            catch (err) {
                console.log(err.stack);
                message.channel.send({
                  content: 'Something went wrong :(',
                });
            }
        }
    },
};