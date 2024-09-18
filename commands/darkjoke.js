const fetch = require('node-fetch');

module.exports = {
    name: 'darkjoke',
    description: 'Get a random dark joke.',
    execute: async (message, args) => {
        try {
            const jokeResponse = await fetch('https://v2.jokeapi.dev/joke/Dark?type=single');
            const jokeData = await jokeResponse.json();
            
            if (jokeData.joke) {
                await message.channel.send(`\`\`\`joke of the day\n${jokeData.joke}\`\`\``);
            } else {
                await message.channel.send('Sorry, I could not find a dark joke right now.');
            }
        } catch (error) {
            console.error('Error fetching joke:', error);
            await message.channel.send('An error occurred while fetching a joke.');
        }
    },
};
