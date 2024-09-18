module.exports = {
    name: 'rmr',
    execute: async (message, args) => {
        if (message.member.permissions.has('MANAGE_ROLES')) {
            const role = message.mentions.roles.first();
            const user = message.mentions.users.first();
            if (role && user) {
                const member = message.guild.members.cache.get(user.id);
                if (member) {
                    await member.roles.remove(role);
                    await message.channel.send(`\`\`\`removed role: ${role.name} of ${user.tag}\`\`\``);
                } else {
                    await message.channel.send('\`\`\`user is not in the server.\`\`\`');
                }
            } else {
                await message.channel.send('\`\`\`@ a user and/or a role.\`\`\`');
            }
        } else {
            await message.channel.send('\`\`\`you don\'t have permission to remove a role.\`\`\`');
        }
    },
};
