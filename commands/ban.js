module.exports = {
    name: 'ban',
    execute: async (message, args) => {
        if (message.member.permissions.has('BAN_MEMBERS')) {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.members.cache.get(user.id);
                if (member) {
                    await member.ban();
                    await message.channel.send(`\`\`\`Banned user: ${user.tag}\`\`\``);
                } else {
                    await message.channel.send('\`\`\`user is not in the server.\`\`\`');
                }
            } else {
                await message.channel.send('\`\`\`please @ a user to ban.\`\`\`');
            }
        } else {
            await message.channel.send('\`\`\`you don\'t have the permission to ban someone.\`\`\`');
        }
    },
};
