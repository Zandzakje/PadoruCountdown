const { SlashCommandBuilder } = require("discord.js");
const _interaction = require("../../files/Interaction.js");

module.exports = {
    data: new SlashCommandBuilder()
	    .setName("god")
	    .setDescription("shows a glimpse of perfection incarnate"),
    async execute(interaction) {
        await interaction.reply(_interaction.Command(interaction.commandName));
    }
}