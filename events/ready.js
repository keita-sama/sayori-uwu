module.exports = {
    name: 'ready',
    once: true,
    execute: (client) => {
        console.log('Sayori online!');

        const statuses = [
            'Type \'s_help\' for help!',
            'Doki Doki Literature Club',
            'with the crayons!',
            'Katawa Shoujo',
            'with Mr\. Cow!',
            'with a noose!',
        ];

        client.user.setPresence({ activities: [{ name: statuses.random() }] });
        setInterval(() => {
            client.user.setPresence({ activities: [{ name: statuses.random() }] });
        }, 180 * 1000);
    },
};