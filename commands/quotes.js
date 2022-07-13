'use strict';

const { quotes } = require('../data');
require('../misc/functions');

module.exports = {
  name: 'quotes',
  description: '',
  execute: async (client, message, _args, db) => {
    // let tamper = await db.get(`tamper_${message.guild.id}`)
    // if (tamper === null) tamper = false

    message.channel.send({
      content: quotes.random(),
    });
  },
};