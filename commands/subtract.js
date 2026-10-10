const Discord = require('discord.js');

module.exports = {
	n: 'subtract',
	a: ['subtract'],
    d: 'Forget your calculator at home? Have no fear!',
    u: '%subtract <number> <number>',
	b: false,
	data: new SlashCommandBuilder()
		.setName('subtract')
		.setDescription('Subtracts two numbers.')
		.addNumberOption((option) => option.setName('num1').setDescription('The number to subtract from.').setRequired(true))
		.addNumberOption((option) => option.setName('num2').setDescription('The number you are subtracting.').setRequired(true)),
	async execute (interaction) {
		const num1 = interaction.options.getNumber('num1');
		const num2 = interaction.options.getNumber('num2');
    	await interaction.reply(`The sum is ${num1-num2}.`);
	},
};