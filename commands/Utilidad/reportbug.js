const Discord = require('discord.js');

module.exports = {
	name: 'reportbug',
    aliases: ['bugreport', 'report'], 
	description: 'Envia un reporte al desarrollador',
    usage: [` <reporte>`],
    cooldown: 5,
	run: async (client, message, args) => 
  {
    const reporte = args.join(" ")
    if (!reporte) return message.channel.send("Debes escribir el reporte!")

    const embed = new Discord.MessageEmbed()

    .setTitle(`Se ha emitido un reporte desde **${client.guild}**`)
    .setDescription(`El usuario **${message.author.username}** ha reportado lo siguiente:\n ````xd```` `)
    .setImage('https://instabug.com/blog/wp-content/uploads/2021/01/b_How-to-Write-a-Bug-Report-The-Ideal-Bug-Report--1024x480.png')
    .setTimestamp()
    .setColor("BLACK")

    client.users.cache.get('682588153407995961').send(embed)
	},
};