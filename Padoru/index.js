const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const cron = require('node-cron');
const messageConstructor = require('./logic/MessageConstructor.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildEmojisAndStickers
    ],
    presence: {
        activities: [{
            name: 'Fate/GO',
            type: ActivityType.Playing
        }],
        status: 'dnd' // online, idle, invisible, dnd
    }
});
const prefix = '!';

cron.schedule('00 00 * * *', () => {
    var msg = messageConstructor.countdownMessage();
    client.channels.fetch('799257632619495435').then(channel => channel.send(msg));
}, {
    scheduled: true,
    timezone: "Europe/Amsterdam"
});

client.on('messageCreate', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	
    var commandMessage = messageConstructor.commandMessage(command);
    message.channel.send(commandMessage);
});

client.login('');

// -- Local testing --
// start bot: node main.js
// stop bot: ctrl + c
// -- x --