const { SlashCommandBuilder } = require("discord.js");
const _interaction = require("../../files/Interaction.js");

module.exports = {
    data: new SlashCommandBuilder()
	    .setName("padoru")
	    .setDescription("shows the padoru lyrics"),
    async execute(interaction) {
        await interaction.reply(_interaction.Command(interaction.commandName));
    }
}