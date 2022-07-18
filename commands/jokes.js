'use strict';

const { jokes } = require('../data');
require('../misc/functions');

module.exports = {
    name: 'jokes',
    execute: async (client, message, _args, db) => {
        // const tamper = await db.get(`tamper_${message.guild.id}`) ?? false;

        message.channel.send({
            content: jokes.random(),
        });
    },
};

