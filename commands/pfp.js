module.exports = {
    name: 'pfp',
    description: 'Affiche l\'avatar d\'un utilisateur mentionné ou de l\'auteur du message.',
    execute: async (message, args) => {
        const user = message.mentions.users.first() || message.author;

        const avatarURL = user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });

        const response = `\`\`\`Here is ${user.tag}\'s avatar:\`\`\`\n${avatarURL}`;

        try {
            await message.channel.send(response);
        } catch (error) {
            console.error('Error while executing this command:', error);
            await message.channel.send('Errol while executing this command.');
        }
    },
};
