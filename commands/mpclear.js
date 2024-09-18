module.exports = {
    name: 'mpclear',
    description: 'Supprime un nombre spécifié de messages envoyés par le bot dans le canal actuel.',
    async execute(message, args) {
        // Vérifier que le nombre de messages est fourni et est un nombre valide
        const numMessages = parseInt(args[0], 10);

        if (isNaN(numMessages) || numMessages <= 0) {
            return message.channel.send('Veuillez spécifier un nombre valide de messages à supprimer.');
        }

        try {
            // Récupérer les messages du canal
            const messages = await message.channel.messages.fetch({ limit: numMessages });

            // Filtrer les messages envoyés par le bot
            const botMessages = messages.filter(msg => msg.author.id === message.client.user.id);

            if (botMessages.size > 0) {
                // Supprimer les messages un par un
                for (const msg of botMessages.values()) {
                    await msg.delete();
                }

                message.channel.send(`\`\`\` ${botMessages.size} message(s) du bot supprimé(s). \`\`\``)
                    .then(msg => msg.delete({ timeout: 5000 }));
            } else {
                await message.channel.send('Aucun message du bot à supprimer.');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression des messages du bot:', error);
            await message.channel.send('Une erreur est survenue lors de la suppression des messages du bot.');
        }
    }
};
