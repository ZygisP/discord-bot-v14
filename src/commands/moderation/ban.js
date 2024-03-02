const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('bans the member provided.')
        .addUserOption(option => option.setName('target').setDescription('The member you want to ban').setRequired(true))
        .addStringOption(option => option.setName('reason').setDescription('The reason you want to ban')),
    async execute(interaction, client)
    {
        const user = interaction.options.getUser('target');
        let reason = interaction.options.getString('reason');
        const member = await interaction.guild.members.fetch(user.id).catch(console.error);

        if (!reason) reason = "No reason provided.";

        await member.ban({
            deleteMessageSeconds: 86400,
            reason: reason
        }).catch(console.error);

        await interaction.reply({
            content: `Banned ${user.tag}`,
        });
    }
}