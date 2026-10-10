const Discord = require('discord.js');

module.exports = {
	n: 'kick',
	a: ['kick', 'k', 'boot', 'b'],
    d: 'For those who have you at your wits end.',
    u: '%kick <user> <reason>',
    b: false,
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kicks a member.')
		.addUserOption((option) => option.setName('target').setDescription('The member to kick.').setRequired(true))
		.addStringOption((option) => option.setName('reason').setDescription('The reason for kicking.'))
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
		.setContexts(InteractionContextType.Guild),
	async execute (interaction) {
    const target = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';
    await interaction.reply(`Banning ${target.username} for reason: ${reason}`);
		await interaction.guild.members.kick(target);
	},
};