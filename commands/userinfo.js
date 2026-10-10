const Discord = require('discord.js');

module.exports = {
	n: 'userinfo',
	a: ['userinfo', 'uinfo'],
    d: 'Gets the mentioned user\'s (or your) info.',
    u: '%userinfo or %userinfo <user>',
	b: false,
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Gets user information.')
		.addUserOption((option) => option.setName('target').setDescription('The member to ban').setRequired(true)),
	async execute (interaction) {
    var member;
    var user;
    const target = interaction.options.getUser('target');
    
    const embed = new Discord.RichEmbed()
      .setColor(target.displayColor)
      .setTitle(`%userinfo`)
  	  .setThumbnail(target.avatarURL)
  	  .addField('User', `${target.tag} (${target.id})`)
  	  .addBlankField()
  	  .addField('Bot User', target.bot, true)
      .addField('Presence', target.presence.status, true)
      .addField('Account Created', new Date(target.createdTimestamp).toGMTString())
      .addField('Server Joined', new Date(target.joinedTimestamp).toGMTString())
      .addField(`Roles (${target.roles.size})`, target.roles.map(role => role.name).join(", "))
  	  .setTimestamp()
  	  .setFooter(`I'm ${client.user.tag}!`, client.user.avatarURL);
    await interaction.reply({embed});
  },
};