module.exports = {
    name: 'addr',
    execute: async (message, args) => {
        if (message.member.permissions.has('MANAGE_ROLES')) {
            const role = message.mentions.roles.first();
            const user = message.mentions.users.first();
            if (role && user) {
                const member = message.guild.members.cache.get(user.id);
                if (member) {
                    await member.roles.add(role);
                    await message.channel.send(`\`\`\`Role added: ${role.name} to ${user.tag}\`\`\``);
                } else {
                    await message.channel.send('\`\`\`the user is not in the server.\`\`\`');
                }
            } else {
                await message.channel.send('\`\`\`@ a user or a role.\`\`\`');
            }
        } else {
            await message.channel.send('\`\`\`you don\'t have the permission to add a role.\`\`\`');
        }
    },
};
