module.exports = {
    name: 'timeout',
    execute: async (message, args) => {
        if (message.member.permissions.has('MODERATE_MEMBERS')) {
            const user = message.mentions.users.first();
            const duration = args[1];
            if (user && duration) {
                const member = message.guild.members.cache.get(user.id);
                if (member) {
                    const milliseconds = parseInt(duration) * 1000;
                    await member.timeout(milliseconds, 'Timeout by \'Lunyx daily task helper\'');
                    await message.channel.send(`\`\`\`${user.tag} got timeout for ${duration} s\`\`\``);
                } else {
                    await message.channel.send('\`\`\`User is not in the server.\`\`\`');
                }
            } else {
                await message.channel.send('\`\`\`@ a user/a valid duration.\`\`\`');
            }
        } else {
            await message.channel.send('\`\`\`You don\'t have permission to timeout.\`\`\`');
        }
    },
};
