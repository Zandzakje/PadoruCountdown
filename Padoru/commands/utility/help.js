const { SlashCommandBuilder } = require("discord.js");
const _interaction = require("../../files/Interaction.js");

module.exports = {
    data: new SlashCommandBuilder()
	    .setName("help")
	    .setDescription("shows a list of all available commands"),
    async execute(interaction) {
        await interaction.reply(_interaction.Command(interaction.commandName));
    }
}