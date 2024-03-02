const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timeout')
        .setDescription('timeout the member provided.')
        .addUserOption(option => option.setName('target').setDescription('The member you want to timeout').setRequired(true))
        .addIntegerOption(option => option.setName('time').setDescription('The amount of minutes to timeout').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('The reason you want to timeout')),
    async execute(interaction, client)
    {
        const user = interaction.options.getUser('target');
        let reason = interaction.options.getString('reason');
        const time = interaction.options.getInteger('time');
        const member = await interaction.guild.members.fetch(user.id).catch(console.error);

        if (!reason) reason = "No reason provided.";

        await member.timeout(time == null ? null : time * 60 * 1000, reason).catch(console.error);

        await interaction.reply({
            content: `Timed out: ${user.tag} for ${time} minutes`,
        });
    }
}