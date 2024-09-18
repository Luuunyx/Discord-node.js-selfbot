module.exports = {
    name: 'rmcha',
    execute: async (message, args) => {
        if (message.member.permissions.has('MANAGE_CHANNELS')) {
            const channel = message.mentions.channels.first();
            if (channel) {
                await channel.delete();
                await message.channel.send(`\`\`\`Channel removed: ${channel.name}\`\`\``);
            } else {
                await message.channel.send('\`\`\`please # a channel.\`\`\`');
            }
        } else {
            await message.channel.send('\`\`\`you don\'t have the permission to remove a channel.\`\`\`');
        }
    },
};
