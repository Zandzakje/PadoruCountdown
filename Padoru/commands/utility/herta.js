const { SlashCommandBuilder } = require("discord.js");
const _interaction = require("../../files/Interaction.js");

module.exports = {
    data: new SlashCommandBuilder()
	    .setName("herta")
	    .setDescription("just herta"),
    async execute(interaction) {
        await interaction.reply(_interaction.Command(interaction.commandName));
    }
}