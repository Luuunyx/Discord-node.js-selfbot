/* 
This self-bot loads all commands from the commands folder and your token from config.json. 
If you encounter any issues with authorized commands, you can manually update authorized_users.json. 
This setup allows you to easily customize commands as needed, using models from the def repo. 
Feel free to create your own commands! 
Note: This script is fully developed by 528a aka Shiranai 𒌐 on discord.
*/

// Modules - Do not modify these
const { Client } = require('discord.js-selfbot-v13'); 
const fs = require('fs');
const path = require('path'); 

// Create a new Discord client using your token
const client = new Client({ checkUpdate: false });
// This is the command prefix; change it according to your preferences
const prefix = '>';

// Load the token from config.json
const configPath = path.resolve(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
const token = config.discord.token;

// Load authorized users
const authorizedUsersFile = './authorized_users.json';
const loadAuthorizedUsers = () => {
    if (fs.existsSync(authorizedUsersFile)) {
        const data = fs.readFileSync(authorizedUsersFile);
        return new Set(JSON.parse(data)); 
    }
    return new Set();
};

// Save authorized users to authorized_users.json
const saveAuthorizedUsers = (authorizedUsers) => {
    fs.writeFileSync(authorizedUsersFile, JSON.stringify(Array.from(authorizedUsers), null, 2));
};

let authorizedUsers = loadAuthorizedUsers();
const isAuthorized = (userId) => authorizedUsers.has(userId) || userId === client.user.id;

// Load commands
const commands = new Map();
const commandsDir = path.join(__dirname, 'commands');

fs.readdir(commandsDir, (err, files) => {
    if (err) console.error('Error while loading commands:', err);
    files.forEach(file => {
        const commandName = path.basename(file, '.js');
        const commandPath = path.join(commandsDir, file);
        try {
            const command = require(commandPath);
            commands.set(commandName, command);
        } catch (error) {
            console.error(`Error while loading ${commandName}:`, error);
        }
    });
});

// Client ready event
client.on('ready', () => {
    console.log("Get ready to try out Lunyx's daily task helper VIP version. Type >_< in any channel.");
    console.log("If you encounter any issues, contact me on Discord at 528a.");
});

// Message event handler
client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Check if the user is authorized
    if (!isAuthorized(message.author.id)) {
        await message.channel.send('You are not allowed to use this command.');
        return;
    }

    const command = commands.get(commandName);

    if (command) {
        try {
            await command.execute(message, args);
        } catch (error) {
            console.error('Error while executing this command:', error);
            await message.channel.send('An error occurred.');
        }
    } else {
        await message.channel.send('Unknown command. Please type `>_<help` to see the list of commands.');
    }
});

// Login to Discord
client.login(token).catch(err => {
    console.error('Failed to login:', err);
});
