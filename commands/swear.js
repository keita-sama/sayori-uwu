'use strict';

const { swearWords } = require('../data');
require('../misc/functions');

module.exports = {
    name: 'swear',
    execute: async (client, message, _args, db) => {
        // const tamper = await db.get(`tamper_${message.guild.id}`) ?? false;

        message.channel.send({
            content: swearWords.random(),
        });
    },
};
