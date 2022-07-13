'use strict';

require('dotenv').config();
const { Sayori } = require('./misc/Client');
// const { server } = require('./server');

const Database = require('@replit/database');
const db = new Database(process.env.db_token);


exports.db = db;

const sayori = new Sayori({
  intents: [
    'GUILDS',
    'GUILD_MESSAGES',
  ],
  prefixes: [
    's_',
    'sayori_',
    '<@871877648547205180> ',
    '<@!871877648547205180> ',
  ],
  devMode: false,
});

const handlers = require('fs').readdirSync('./handlers');
for (const handler of handlers) {
  require(`./handlers/${handler}`)(sayori);
}

// server();
sayori.wakeUp(process.env.token);