const { saveAuthorizedUsers, loadAuthorizedUsers } = require('../utils/authorizeUtils');

module.exports = {
    name: 'auth',
    description: 'Authorize a user to use the selfbot.',
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
            const userToAuthorize = message.mentions.users.first();
            if (userToAuthorize) {
                authorizedUsers.add(userToAuthorize.id);
                try {
                    saveAuthorizedUsers(authorizedUsers);
                } catch (error) {
                    console.error('Error saving authorized users:', error);
                    await message.channel.send('```Error saving authorized users.```');
                    return;
                }
                await message.channel.send(`\`\`\`Authorized user: ${userToAuthorize.tag}\`\`\``);
            } else {
                await message.channel.send('```Mention a user to authorize.```');
            }
        } else {
            await message.channel.send('```You are not allowed to use this command.```');
        }
    }
};
