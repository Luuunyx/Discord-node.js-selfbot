module.exports = {
    name: 'lock',
    execute: async (message, args) => {
        if (message.member.permissions.has('MANAGE_CHANNELS')) {
            await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
                SEND_MESSAGES: false,
            });
            await message.channel.send('\`\`\`locked channel.\`\`\`');
        } else {
            await message.channel.send('\`\`\`you don\'t have the permission to lock this channel.\`\`\`');
        }
    },
};
