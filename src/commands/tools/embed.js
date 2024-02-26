const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Return my embed'),
    async execute(interaction, client)
    {
        const embed = new EmbedBuilder()
            .setTitle('This is an EMBED!')
            .setDescription('This is a description')
            .setColor(0x18e1ee)
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                url: `https://www.youtube.com/channel/UCXRpcE7AeyeBO10_ZIZ-fKQ`,
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag
            })
            .setURL(`https://www.youtube.com/@peacendloove2020`)
            .addFields([
                {
                    name: `field 1`,
                    value: `field value 1`,
                    inline: true
                },
                {
                    name: `field 2`,
                    value: `field value 2`,
                    inline: true
                }
            ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};