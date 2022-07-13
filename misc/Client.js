const { Client, Collection } = require('discord.js');
require('./functions');
require('dotenv').config();
const desc = 'Sayori is a character in the game Doki Doki Literature Club, she is the vice president of the Literature Club founded by Monika and along with the other club members she spends her time after school in the club.';

exports.Sayori = class Sayori extends Client {
  constructor({ prefixes, devMode, intents }) {
    super({
      intents,
    });
    this.prefixes = prefixes;
    this.devMode = devMode;
    this.commands = new Collection();
    this.id = 871877648547205180;
    this.description = desc;
    this.color = '#3eb0ff';
  }
  wakeUp(token) {
    super.login(token);
  };
};