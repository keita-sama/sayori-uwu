const { MessageEmbed } = require('discord.js');
const { poems } = require('../data');
const { strFormat } = require('../misc/functions');
require('../misc/functions');


module.exports = {
    name: 'poem',
    description: '',
    execute: async (client, message, args, db) => {
        const tamper = await db.get(`tamper_${message.guild.id}`);
        if (tamper === null) tamper = false
        const embed = new MessageEmbed().setColor(client.color);
        const chosenPoem = args.join(' ');

        if (tamper === null || tamper === false) {
            if (args.length > 1) {
                try {
                    const poem = poems.normal.find(poem => poem.name === strFormat(chosenPoem));
                    message.channel.send({
                        embeds: [
                            embed.setTitle(poem.name).setDescription(poem.value),
                        ],
                    });
                }
                catch {
                    message.channel.send({
                        content: 'Huh? I\'ve never written anything with that name',
                    });
                }
            }
            else {
                const normalPoem = poems.normal.random();
                message.channel.send({
                    embeds: [
                        embed.setTitle(normalPoem.name).setDescription(normalPoem.value),
                    ],
                });
            }
        }
        else {
            const tamperedPoem = poems.tampered.random();
            message.channel.send({
                embeds: [
                    embed.setTitle(tamperedPoem.name).setDescription(tamperedPoem.value),
                ],
            });
        }
    },
};
