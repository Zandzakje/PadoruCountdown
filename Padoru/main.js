//import { checkPadoruReached } from './logic/dateCalculations';

const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildEmojisAndStickers
    ]
});
const prefix = '!';
const dateCalculations = require('./logic/DateCalculations.js');
const cron = require('./node_modules/node-cron');

// -- Set bot's status --
client.once('ready', () => {
    console.log('umu!');
    // client.user.setPresence({
    //   status: 'dnd', // online, idle, invisible, dnd
    // });
    // client.user.setActivity({
    //     name: 'Fate/GO',
    //     type: 'PLAYING'
    // });
    client.user.setPresence({
        status: 'dnd',
        activities: {
            name: 'Fate/GO',
            type: ActivityType.Playing
        }
    })
});
// -- x --

// -- Trigger automatically at midnight --
cron.schedule('00 00 00 * * *', () => {
    var msg = dateCalculations.checkPadoruReached();
    var msgSpecialDay = dateCalculations.messageSpecialDays();
    console.log("msg: " + msg);
    console.log("msgSpecialDay: " + msgSpecialDay);
    if(msgSpecialDay == "") {
        client.channels.fetch('799257632619495435').then(channel => channel.send(msg));
    } else {
        client.channels.fetch('799257632619495435').then(channel => channel.send(msgSpecialDay));
    }
});
// -- x --

// -- Test trigger typed commands --
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

	// if (command === 'trigger') {
	//     message.reply('Command triggered!');
	// }
});
// -- x --

client.on("messageReactionAdd", function(messageReaction, user){
    console.log(`a reaction is added to a message`);
});

client.login('ODg0Mzk3MTMzODAzOTc4Nzky.YTX5BA.sVv0T3e74wcBreWbQwB8v1NmBps');
// start bot: node main.js
// stop bot: ctrl + c