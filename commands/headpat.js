'use strict';

require('../misc/functions');

module.exports = {
    name: 'headpat',
    description: '',
    execute: async (client, message, _args, db) => {
        // const tamper = await db.get(`tamper_${message.guild.id}`)
        // if (tamper === null) tamper = false
        const headpatRes = [
            'Hehehe!~', 'Just don\'t mess up my bow!',
            'S-stop being so silly! :blush:',
            'Well, my hair\'s already pretty messy, so I don\'t see an issue!',
            'Hehehe! Thank you!',
        ];
        message.channel.send({
            content: headpatRes.random(),
        });
    },
};
