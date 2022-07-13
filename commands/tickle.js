'use strict';

require('../misc/functions');

module.exports = {
    name: 'tickle',
    description: '',
    execute: async (client, message, _args, db) => {
        // const tamper = await db.get(`tamper_${message.guild.id}`)
        const tickle = [
            '*giggles*',
            `PFFFT BWA${'HA'.repeat(Math.floor(Math.random() * 5) + 1)}-`,
        ];
        message.channel.send({
            content: tickle.random(),
        });
    },
};
