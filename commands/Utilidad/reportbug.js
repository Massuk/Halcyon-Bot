module.exports = {
	name: "reportbug",
    aliases: ['bugreport', 'report'], 
	description: 'Envia un reporte al desarrollador',
    usage: [` <reporte>`],
    cooldown: 5,
	run: async (client, message, args, discord) =>  {
    
    let owner = await client.users.fetch('682588153407995961')
    
    if (!args[0]) return message.reply('Please add a bug to report!')
    

    const reportEmbed = new discord.MessageEmbed()

    .setTitle(`Se ha emitido un reporte desde **${message.guild.name}**`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail(message.guild.iconURL())
    .setDescription(`El usuario **${message.author.username}** ha reportado lo siguiente:\n \`\`\`\n${args}\n\`\`\` `)
    .setImage('https://instabug.com/blog/wp-content/uploads/2021/01/b_How-to-Write-a-Bug-Report-The-Ideal-Bug-Report--1024x480.png')
    .setTimestamp()
    .setColor("BLACK")

    client.users.cache.get('682588153407995961').send({ embeds: [reportEmbed] });
	},
};