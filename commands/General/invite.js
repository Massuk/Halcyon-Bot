const emoji = require("../../config/emojis.json")
module.exports = {
    name: "uptime",
    aliases: ["test"],
    description: "Muestra el ping del bot",
    run: async (client, message, args, discord) => {
        
    let days = Math.floor(client.uptime / 86400000)
    let hours = Math.floor(client.uptime / 3600000) % 24
    let minutes = Math.floor(client.uptime / 60000) % 60
    let seconds = Math.floor(client.uptime / 1000) % 60

    let uptimeEmbed = new discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`${emoji.estado} Llevo encendido: \`${days}\` días, \`${hours}\` horas, \`${minutes}\` minutos y \`${seconds}\` segundos. `)

    message.reply({ embeds: [uptimeEmbed]});
    }
}