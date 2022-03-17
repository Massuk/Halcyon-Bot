const Discord = require('discord.js');

module.exports = {
	name: "reportbug",
    aliases: ['bugreport', 'report'], 
	description: 'Envia un reporte al desarrollador',
    usage: [` <reporte>`],
    cooldown: 5,
	run: async (client, message, args) =>  {
    
    if (!args[0]) return message.reply('Por favor escriba el reporte')

    message.reply(`✉ | ${message.author.username}, gracias por reportar el problema! :)`)


    let owner = await client.users.fetch('682588153407995961')

    owner.send(new Discord.MessageEmbed()
    .setTitle(`Se ha emitido un reporte desde **${guild.name}**`)
    .setDescription(`El usuario **a** ha reportado lo siguiente`)
    .setImage('https://instabug.com/blog/wp-content/uploads/2021/01/b_How-to-Write-a-Bug-Report-The-Ideal-Bug-Report--1024x480.png')
    .setTimestamp()
    .setColor("BLACK")
  )
	},
};