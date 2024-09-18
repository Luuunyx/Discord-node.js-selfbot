module.exports = {
    name: 'info',
    description: 'Display information about a user.',
    async execute(message, args) {
        // Check if a user is mentioned or provided
        const user = message.mentions.users.first() || message.author;

        // Create a response string with user info
        const response = `User Information:
User ID: ${user.id}
Username: ${user.username}
Account Creation Date: ${user.createdAt.toISOString()}`;

        // Send the response message
        await message.channel.send(`\`\`\` ${response} \`\`\``);
    }
};
