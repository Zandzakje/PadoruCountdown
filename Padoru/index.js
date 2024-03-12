const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const botSettings = require("./files/BotSettings.js");
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildEmojisAndStickers
    ],
    presence: {
        activities: [{
            name: "Fate/GO",
            type: ActivityType.Playing
        }],
        status: "dnd" // online, idle, invisible, dnd
    }
});
const cron = require("node-cron");
const emoji = require("./files/Emoji.js");
const messageConstructor = require("./files/MessageConstructor.js");


cron.schedule("00 00 * * *", () => {
    var message = messageConstructor.CountdownMessage();
    client.channels.fetch("798937372657319969").then(channel => channel.send(message));
}, {
    scheduled: true,
    timezone: "Europe/Amsterdam"
});

cron.schedule("00,30 * * * *", () => {
    botSettings.ChangePresence(client);
}, {
    scheduled: true,
    timezone: "Europe/Amsterdam"
});

client.on("messageCreate", message => {
	if(!botSettings.prefixes.some(prefix => message.content.startsWith(prefix)) || message.author.bot) return;
    var command;
    var command2;
    var commandMessage;
    if(message.content.startsWith(botSettings.prefixes[0])){
        command = messageConstructor.SeperateMessageFromPrefix(message.content, 0);
        commandMessage = messageConstructor.CommandMessage(command);
        if(commandMessage != "error"){
            message.react(emoji.defaultEmojis[7]);
            message.channel.send(commandMessage);
        }else{
            message.react(emoji.defaultEmojis[8]);
        }
    }

    if(message.content.startsWith(botSettings.prefixes[1])){
        command = messageConstructor.SeperateMessageFromPrefix(message.content, 1);
        if(command.startsWith("emoji")){
            var emojiString = "emoji";
            command2 = command.slice(emojiString.length).trim().split(/ +/);
            if(command2 != ""){
                var command2FirstOnly = String(command2).charAt(0);
                var command2Converted = Number(command2FirstOnly);
                switch(command2Converted){
                    case 0:
                    case 1:
                    case 2:
                        commandMessage = emoji.serverEmojis[command2FirstOnly];
                        message.react(emoji.defaultEmojis[7]);
                        message.channel.send(commandMessage);
                        break;
                    default:
                        message.react(emoji.defaultEmojis[8]);
                        break;
                }
            }else{
                commandMessage = emoji.RandomServerEmoji();
                message.react(emoji.defaultEmojis[7]);
                message.channel.send(commandMessage);
            }
        }else{
            message.react(emoji.defaultEmojis[8]);
        }
    }

    if(message.content.startsWith(botSettings.prefixes[2])){
        command = messageConstructor.SeperateMessageFromPrefix(message.content, 2);
        if(command == "switch"){
            message.react(emoji.defaultEmojis[7]);
            botSettings.ChangePresence(client);
        }else{
            message.react(emoji.defaultEmojis[8]);
        }
    }
});

client.login("");

// -- Local testing --
// start bot: node main.js
// stop bot: ctrl + c
// -- x --