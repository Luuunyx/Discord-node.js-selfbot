const { saveAuthorizedUsers, loadAuthorizedUsers } = require('../utils/authorizeUtils');

module.exports = {
    name: 'unauth',
    description: 'Deauthorize a user from using the selfbot.',
    async execute(message, args) {
        let authorizedUsers;
        try {
            authorizedUsers = loadAuthorizedUsers();
        } catch (error) {
            console.error('Error loading authorized users:', error);
            await message.channel.send('```Error loading authorized users.```');
            return;
        }

        if (message.author.id === message.client.user.id) {
            const userToDeauthorize = message.mentions.users.first();
            if (userToDeauthorize) {
                authorizedUsers.delete(userToDeauthorize.id);
                try {
                    saveAuthorizedUsers(authorizedUsers);
                } catch (error) {
                    console.error('Error saving authorized users:', error);
                    await message.channel.send('```Error saving authorized users.```');
                    return;
                }
                await message.channel.send(`\`\`\`Deauthorized user: ${userToDeauthorize.tag}\`\`\``);
            } else {
                await message.channel.send('```Mention a user to deauthorize.```');
            }
        } else {
            await message.channel.send('```You are not allowed to use this command.```');
        }
    }
};
