const Discord = require('discord.js');

module.exports = {
	n: 'ban',
	a: ['ban', 'b', 'hammer', 'banhammer'],
    d: 'For those who have you at your wits end.',
    u: '%ban <user> <reason>',
    b: false,
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans a member.')
		.addUserOption((option) => option.setName('target').setDescription('The member to ban').setRequired(true))
		.addStringOption((option) => option.setName('reason').setDescription('The reason for banning'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setContexts(InteractionContextType.Guild),
	async execute (interaction) {
    const target = interaction.options.getUser('target');
	const reason = interaction.options.getString('reason') ?? 'No reason provided';
    await interaction.reply(`Banning ${target.username} for reason: ${reason}`);
		await interaction.guild.members.ban(target);
	},
};