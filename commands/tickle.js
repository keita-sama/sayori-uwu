'use strict';

const { tickle } = require('../data');
require('../misc/functions');

module.exports = {
    name: 'tickle',
    description: '',
    execute: async (client, message, _args, db) => {
        // let tamper = await db.get(`tamper_${message.guild.id}`)

        message.channel.send({
            content: tickle.random(),
        });
    },
};
