module.exports = {
    name: 'makecha',
    execute: async (message, args) => {
        if (message.member.permissions.has('MANAGE_CHANNELS')) {
            const channelName = args.join(' ');
            if (channelName) {
                await message.guild.channels.create(channelName, { type: 'text' });
                await message.channel.send(`\`\`\`new channel made: ${channelName}\`\`\``);
            } else {
                await message.channel.send('\`\`\`give a name for this channel.\`\`\`');
            }
        } else {
            await message.channel.send('\`\`\`you don\'t have the permission to create a channel.\`\`\`');
        }
    },
};
