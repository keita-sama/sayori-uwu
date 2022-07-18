/*
'use strict';

require('../misc/functions');

module.exports = {
  name: 'NAME',
  execute: async (client, message, _args, db) => {
    const tamper = await db.get(`tamper_${message.guild.id}`) ?? false;
    // ...
  }
}

*/