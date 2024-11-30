const { SlashCommandBuilder } = require("discord.js");
const _interaction = require("../../files/Interaction.js");

module.exports = {
    data: new SlashCommandBuilder()
	    .setName("gacha")
	    .setDescription("are you lucky enough to get the padoru?"),
    async execute(interaction) {
        await interaction.reply(_interaction.Command(interaction.commandName));
    }
}