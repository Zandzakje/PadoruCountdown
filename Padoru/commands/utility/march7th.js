const { SlashCommandBuilder } = require("discord.js");
const _interaction = require("../../files/Interaction.js");

module.exports = {
    data: new SlashCommandBuilder()
	    .setName("march7th")
	    .setDescription("march 7th chibi"),
    async execute(interaction) {
        await interaction.reply(_interaction.Command(interaction.commandName));
    }
}