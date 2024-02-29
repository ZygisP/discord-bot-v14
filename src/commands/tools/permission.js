const { SlashCommandBuilder, PermissionFlagsBits, PermissionsBitField, IntegrationApplication } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('permission')
        .setDescription('this command requires permission')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client)
    {
        const { roles } = interaction.member;
        const role = await interaction.guild.roles.fetch('1212772936860303471').catch(console.error);

        const testRole = await interaction.guild.roles.create({
            name: `Test`,
            permissions: [PermissionsBitField.Flags.KickMembers]
        }).catch(console.error);

        if (roles.cache.has('1212772936860303471'))
        {
            await interaction.deferReply({
                fetchReply: true
            });

            await roles.remove(role).catch(console.error);
            await interaction.editReply({
                content: `Removed: ${role.name} role from you.`
            })
        } else
        {
            await interaction.reply({
                content: `You do not have the ${role.name} role.`
            })
        }

        await roles.add(testRole).catch(console.error);

        await testRole.setPermissions([PermissionsBitField.Flags.BanMembers]).catch(console.error);

        const channel = await interaction.guild.channels.create({
            name: `test`,
            permissionOverwrites: [{
                id: interaction.guild.id,
                deny: [PermissionsBitField.Flags.ViewChannel]
            },
            {
                id: testRole.id,
                allow: [PermissionsBitField.Flags.ViewChannel]
            }
            ]
        });

        await channel.permissionOverwrites.edit(testRole.id, { SendMessages: false }).catch(console.error);
    },
};