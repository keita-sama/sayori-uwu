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
            const triggers = await db.get(`triggers_${message.guild.id}`) ?? true;
            if (trigger(message.content.toLowerCase()) !== 'None' || triggers !== true) return;
            return message.channel.send(trigger(message.content.toLowerCase()));
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
                console.log(err);
                message.channel.send('Something went wrong :(');
            }
        }
    },
};