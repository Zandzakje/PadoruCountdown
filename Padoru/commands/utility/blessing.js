const { SlashCommandBuilder } = require("discord.js");
const _interaction = require("../../files/Interaction.js");

module.exports = {
    data: new SlashCommandBuilder()
	    .setName("blessing")
	    .setDescription("get blessed by the padoru bot :D"),
    async execute(interaction) {
        await interaction.reply(_interaction.Command(interaction.commandName));
    }
}