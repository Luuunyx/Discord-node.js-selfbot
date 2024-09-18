module.exports = {
    name: 'ping',
    execute: async (message, args) => {
        const ping = Date.now() - message.createdTimestamp;
        await message.channel.send(`\`\`\`ping: ${ping}ms\`\`\``);
    },
};
