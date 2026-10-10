const Discord = require('discord.js');

module.exports = {
	n: 'roll',
	a: ['roll', 'd'],
    d: 'Roll the dice!',
    u: '%roll <number>',
	b: false,
    data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls a dice of specified sides.')
		.addIntegerOption((option) => option.setName('number').setDescription('The amount of sides to your dice.').setRequired(true))
		.addIntegerOption((option) => option.setName('amount').setDescription(`The amount of dice you'd like to roll.`)),
	async execute (interaction) {
		var number = interaction.options.getInteger('number');
        const amount = interaction.options.getInteger('amount') ?? 1;
        var output_string = '';
        if (amount <= 1) output_string = `D${number} Roll: ${Math.round((Math.random() * number) + 1)}.`;
        else { 
            for (let i = 1; i <= amount; i++) {
                output_string += `D${number} Roll #${i}: ${Math.round((Math.random() * number) + 1)}.\n`;
            }
        }
        await interaction.reply(`${output_string}`);
	},
};