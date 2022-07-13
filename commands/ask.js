'use strict';

const { askResponses } = require('../data');
require('../misc/functions');

module.exports = {
  name: 'ask',
  description: '',
  execute: async (client, message, _args, db) => {
    let tamper = await db.get(`tamper_${message.guild.id}`);
    if (tamper === null) tamper = false;

    tamper === false || tamper === null
      ? askResponses.push('Maybe we should ask The Magic Conch, instead.')
      : askResponses.push('As sure as I\'m depressed!');

    message.channel.send({
      content: askResponses.random(),
    });
  },
};