module.exports = {
    name: "Lunyx's daily task helper",
    description: 'Affiche la liste des commandes disponibles.',
    async execute(message, args) {
        const helpMessage = `\`\`\`here is commands lists:
ping - Get the bot's ping
lock - lock a channel
unlock - unlock a channel
ban - ban a mentionned User
unban - Unban someone by there ID or tag
kick - kick a mentionned user
info - display your id , channel id and server id
pfp - get someone's pfp
fun - tell a random joke
time - give you your actual time
timeout - timeout someone
makecha - create a new channel
rmcha - remove a channel
auth - authorize someone to use the selfbot(be carefull they can use all the bots commands)
unauth - unauthorize someone to use the selfbot
addr - add a role to a user
rmr - remove a role to the user
darkjoke - tells a random dark joke
help - display commands list\`\`\``;

        await message.channel.send(helpMessage);
    }
};
