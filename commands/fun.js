const fetch = require('node-fetch');

module.exports = {
    name: 'fun',
    execute: async (message, args) => {
        const jokeResponse = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const jokeData = await jokeResponse.json();
        await message.channel.send(`\`\`\`joke of the day\n${jokeData.setup}\n\n${jokeData.punchline}\`\`\``);
    },
};
