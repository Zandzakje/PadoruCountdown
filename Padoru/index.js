// -- Discord bot setup --
const { Client, Collection, GatewayIntentBits, ActivityType, Events } = require("discord.js");
const { token } = require("./config.json");
const botSettings = require("./files/BotSettings.js");
const cron = require("node-cron");
const mainMessage = require("./files/MainMessage.js");
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
const fs = require("node:fs");
const path = require("node:path");
client.commands = new Collection();
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);
// -- X --

// -- Scheduled events --
cron.schedule("00 00 * * *", () => {
    var message = mainMessage.Countdown();
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
// -- X --

// -- Commands handling --
for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		}
	}
});
// -- X --

client.login(token);

// -- Local testing --
// start bot: node index.js
// stop bot: ctrl + c
// -- x --