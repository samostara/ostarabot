const Discord = require('discord.js');

module.exports = {
	n: 'divide',
	a: ['divide'],
    d: 'Forget your calculator at home? Have no fear!',
    u: '%divide <number> <number>',
	b: false,
    data: new SlashCommandBuilder()
		.setName('divides')
		.setDescription('Dividess two numbers.')
		.addNumberOption((option) => option.setName('num1').setDescription('The numerator.').setRequired(true))
		.addNumberOption((option) => option.setName('num2').setDescription('The denominator.').setRequired(true)),
	async execute (interaction) {
		const num1 = interaction.options.getNumber('num1');
		const num2 = interaction.options.getNumber('num2');
    	await interaction.reply(`The sum is ${num1/num2}.`);
	},
};