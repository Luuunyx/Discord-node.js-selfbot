module.exports = {
    name: 'unban',
    execute: async (message, args) => {
        if (message.member.permissions.has('BAN_MEMBERS')) {
            const userId = args[0];
            if (userId) {
                try {
                    await message.guild.members.unban(userId);
                    await message.channel.send(`\`\`\`Debanned user: ${userId}\`\`\``);
                } catch (error) {
                    await message.channel.send(`\`\`\`couldn\'t unban ${userID}.\`\`\``);
                }
            } else {
                await message.channel.send('\`\`\`Precise the user to unban.\`\`\`');
            }
        } else {
            await message.channel.send('\`\`\`you don\'t have permission to unban.\`\`\`');
        }
    },
};
