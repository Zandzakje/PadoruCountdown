const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const cron = require('./node_modules/node-cron');
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

cron.schedule('00 00 00 * * *', () => {
    var msg = messageConstructor.generateCountdownMessage();
    client.channels.fetch('799257632619495435').then(channel => channel.send(msg));
});

client.on('messageCreate', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	 
    switch(command) {
        case 'umu':
            message.channel.send({ files: [{ attachment: './images/padoru.png' }] });
            break;
        case 'nero':
            message.channel.send({ files: [{ attachment: './images/nero_happy.jpg' }] });
            break;
        case 'emote':
            message.channel.send('<:padorunobg:1179725588500582432><:harpyface:1157629813654310932>');
            break;
    }
});

client.login('ODg0Mzk3MTMzODAzOTc4Nzky.YTX5BA.sVv0T3e74wcBreWbQwB8v1NmBps');
// start bot: node main.js
// stop bot: ctrl + c