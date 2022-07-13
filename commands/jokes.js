'use strict';

const { jokes } = require('../data');
require('../misc/functions');

module.exports = {
    name: 'jokes',
    description: '',
    execute: async (client, message, _args, db) => {
        // let tamper = await db.get(`tamper_${message.guild.id}`)
        // if (tamper === null) tamper = false

        message.channel.send({
            content: jokes.random(),
        });
    },
};

