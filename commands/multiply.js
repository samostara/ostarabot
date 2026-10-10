const Discord = require('discord.js');

module.exports = {
	n: 'multiply',
	a: ['multiply'],
    d: 'Forget your calculator at home? Have no fear!',
    u: '%multiply <number> <number>',
	b: false,
	data: new SlashCommandBuilder()
		.setName('multiply')
		.setDescription('Multiplies two numbers.')
		.addNumberOption((option) => option.setName('num1').setDescription('The first number to multiply.').setRequired(true))
		.addNumberOption((option) => option.setName('num2').setDescription('The second number to multiply.').setRequired(true)),
	async execute (interaction) {
		const num1 = interaction.options.getNumber('num1');
		const num2 = interaction.options.getNumber('num2');
    	await interaction.reply(`The sum is ${num1*num2}.`);
	},
};