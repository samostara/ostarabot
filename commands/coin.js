const Discord = require('discord.js');

module.exports = {
      n: 'coin',
      a: ['coin', 'coinflip', 'flipcoin', 'flip'],
        d: 'Deciding between two options? Flip!',
        u: '%coin',
        b: false,
	      data: new SlashCommandBuilder()
		      .setName('coin')
		      .setDescription('Flips a coin.'),
        async execute (interaction) {
        var i = [];
        i[0] = `Heads`;
        i[1] = `Tails`;
        
        var j = Math.round(Math.random() * 1);
        await interaction.reply(`It landed on ${i[j]}.`);
      },
    };