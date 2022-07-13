'use strict';
require('../misc/functions');

module.exports = {
    name: 'swear',
    description: '',
    execute: async (client, message, _args, db) => {
        // const tamper = await db.get(`tamper_${message.guild.id}`)
        // if (tamper === null) tamper = false
        const swearRes = [
            'HECK!',
            'DARN IT!',
            'POOP!',
            'CRUD!',
            'FRICK!',
            'SON OF A BISCUIT!',
            'MOTHERTRUCKER!',
        ];

        message.channel.send({
            content: swearRes.random(),
        });
    },
};
