'use strict';

const { quotes } = require('../data');
require('../misc/functions');

module.exports = {
  name: 'quotes',
  description: '',
  execute: async (client, message, _args, db) => {
    // const tamper = await db.get(`tamper_${message.guild.id}`) ?? false;

    message.channel.send({
      content: quotes.random(),
    });
  },
};