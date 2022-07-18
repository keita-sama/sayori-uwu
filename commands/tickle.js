'use strict';

const { tickle } = require('../data');
require('../misc/functions');

module.exports = {
    name: 'tickle',
    execute: async (client, message, _args, db) => {
        // const tamper = await db.get(`tamper_${message.guild.id}`) ?? false;

        message.channel.send({
            content: tickle.random(),
        });
    },
};
