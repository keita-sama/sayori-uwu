require('../misc/functions');

module.exports = {
  name: 'quotes',
  description: '',
  execute: async (client, message, _args, db) => {
    // const tamper = await db.get(`tamper_${message.guild.id}`)
    // if (tamper === null) tamper = false
    const quotes = [
            'I want breakfast.',
            'AAAAAaaaaAAAAAAAAHH!!!!',
            'get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head get out of my head',
            'I made eggs and toast!',
            'It\'s bad to skip breakfast! I get all cranky...',
            'I was playing with the crayons and smacked my forehead into the shelf!',
            'Yuri\'s boobs are just as they\'ve always been! Big and beautiful!',
            'I did something bad, and now I have to accept the revolution!',
            'This isn\'t the napping club!',
            'I\'m fine with--looking like a unicorn--',
            'So, if I keep it unbuttoned then I won\'t get a boyfriend, right?',
        ];
    message.channel.send({
      content: quotes.random()
    });
  },
};