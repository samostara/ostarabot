const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	n: 'add',
	a: ['add'],
    d: 'Forget your calculator at home? Have no fear!',
	u: '%add <number> <number>',
	b: false,
	data: new SlashCommandBuilder()
		.setName('add')
		.setDescription('Forget your calculator at home? Have no fear!')
		.addNumberOption((option) => option.setName('num1').setDescription('The first number to add.').setRequired(true))
		.addNumberOption((option) => option.setName('num2').setDescription('The second number to add.').setRequired(true)),
	async execute (interaction) {
		const num1 = interaction.options.getNumber('num1');
		const num2 = interaction.options.getNumber('num2');
    	await interaction.reply(`The sum is ${num1+num2}.`);
	},
};