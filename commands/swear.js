'use strict';

const { swearWords } = require('../data');
require('../misc/functions');

module.exports = {
    name: 'swear',
    description: '',
    execute: async (client, message, _args, db) => {
        // let tamper = await db.get(`tamper_${message.guild.id}`)
        // if (tamper === null) tamper = false

        message.channel.send({
            content: swearWords.random(),
        });
    },
};
