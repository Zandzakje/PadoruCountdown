const { SlashCommandBuilder } = require("discord.js");
const _interaction = require("../../files/Interaction.js");

module.exports = {
    data: new SlashCommandBuilder()
	    .setName("countdown")
	    .setDescription("Shows a message with the days remaining until the next padoru"),
    async execute(interaction) {
        await interaction.reply(_interaction.Command(interaction.commandName));
    }
}