module.exports = {
    name: 'time',
    description: 'Get the current time.',
    execute: async (message, args) => {
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        await message.channel.send(`\`\`\`diff\nThe current time is: \n-${formattedTime}\n\`\`\``);
    },
};
