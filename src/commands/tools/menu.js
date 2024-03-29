const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Return a select menu.'),
    async execute(interaction, client)
    {
        const menu = new StringSelectMenuBuilder()
            .setCustomId(`sub-menu`)
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(
                new StringSelectMenuOptionBuilder({
                    label: `Option #1`,
                    value: `https://www.youtube.com/@peacendloove2020`,
                }),
                new StringSelectMenuOptionBuilder({
                    label: `Option #2`,
                    value: `https://www.youtube.com/@girafganger7`,
                }));

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)]
        })
    },
};