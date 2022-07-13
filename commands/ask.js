require('../misc/functions');
const { randomString } = require('../misc/functions');

module.exports = {
  name: 'ask',
  description: '',
  execute: async (client, message, _args, db) => {
    const tamper = await db.get(`tamper_${message.guild.id}`);
    if (currentTamper === null) currentTamper = false;
    const defaultRes = [
      ['Yes', 'Of course', 'Of course no', 'No', 'Maybe', 'Possibly'].random() + ['!', '.'].random(),
      'My vice president powers ' + ['says ', 'tells me '].random() + ['\'yes\'!', '\'no\'!', '\'maybe\'!'].random(),
      ['Yes ', 'Of course ', 'Of course not '].random() + 'silly!',
      'I\'d say ask Monika, but she\'s busy being ~~a meanie~~ an amazing club president!',
      'I\'d say ask Yuri, but she\'s a little shy at the moment.',
      'I\'d say ask Natsuki, but she\'s busy baking some cookies for ~~me to steal~~ the club!',
      'You\'ve got a better chance of having a happy ending in DDLC! Ehehe...~',
      'Not really.',
      'J-Just a little bit!',
    ];

    tamper === false || tamper === null
      ? defaultRes.push('Maybe we should ask The Magic Conch, instead.')
      : defaultRes.push('As sure as I\'m depressed!');

    message.channel.send({
      content: defaultRes.random(),
    });
  },
};