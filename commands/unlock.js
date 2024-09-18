module.exports = {
    name: 'unlock',
    execute: async (message, args) => {
        if (message.member.permissions.has('MANAGE_CHANNELS')) {
            await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                SEND_MESSAGES: true,
            });
            await message.channel.send('\`\`\`unlocked channel.\`\`\`');
        } else {
            await message.channel.send('\`\`\`you don\'t have permission to unlock channel.\`\`\`');
        }
    },
};
