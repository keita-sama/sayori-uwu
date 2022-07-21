'use strict';

const { hugResponses } = require('../data');
require('../misc/functions');

module.exports = {
  name: 'hug',
  execute: async (client, message, _args, db) => {
    // const tamper = await db.get(`tamper_${message.guild.id}`) ?? false;
    const target = message.mentions.users.first() ?? message.author

    if (target.id == client.id) {
      message.channel.send({
        content: hugResponses.self.random()
      })
    }
    else {
      message.channel.send({
        content: hugResponses.target(target.username).random()
      })
    }
  }
}