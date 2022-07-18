'use strict';

const { headpatResponses } = require('../data');
require('../misc/functions');

module.exports = {
    name: 'headpat',
    description: '',
    execute: async (client, message, _args, db) => {
        // const tamper = await db.get(`tamper_${message.guild.id}`) ?? false;

        message.channel.send({
            content: headpatResponses.random(),
        });
    },
};
