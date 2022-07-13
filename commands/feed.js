const { feed, handleFeed } = require('../data');

module.exports = {
    name: 'feed',
    description: '',
    execute: async (client, message, args, db) => {
        const food = args.length > 0
            ? args.join('')
            : null

        message.channel.send({
            content: handleFeed(feed(food)),
        });
    },
};