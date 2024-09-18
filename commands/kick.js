module.exports = {
    name: 'kick',
    execute: async (message, args) => {
        if (message.member.permissions.has('KICK_MEMBERS')) {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.members.cache.get(user.id);
                if (member) {
                    await member.kick();
                    await message.channel.send(`\`\`\`kicked user: ${user.tag}\`\`\``);
                } else {
                    await message.channel.send('\`\`\`user is not in this server.\`\`\`');
                }
            } else {
                await message.channel.send('\`\`\`please @ a user.\`\`\`');
            }
        } else {
            await message.channel.send('\`\`\`you don\'t have enough permission.\`\`\`');
        }
    },
};
