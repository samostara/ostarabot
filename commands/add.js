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
		.addIntegerOption((option) => option.setName('num1').setDescription('The first number to add.').setRequired(true))
		.addIntegerOption((option) => option.setName('num2').setDescription('The second number to add.').setRequired(true));
	async execute(interaction) {
		let numArray = args.map(n=> parseInt(n));
    	let total = numArray.reduce((p,c) => p+c);
    	await interaction.reply(`The sum is ${total}.`);
	},
};