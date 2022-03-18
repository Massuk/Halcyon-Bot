const emoji = require("../../config/emojis.json")
const prefix = process.env.PREFIX;
module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Muestra el panel de ayuda con todos los comandos",
    run: async (client, message, args, discord) => {
    
    //! EMBEDS

    const embedPrincipal = new discord.MessageEmbed()
      .setColor('#ff4055')
      .setTitle(`${emoji.corona} Halcyon - Panel de ayuda`)
      .setDescription(`Hola! Mi **prefix** para usar los comandos es: \`${prefix}\``)
      .addField(`${emoji.estrella} **__Mis características__**`, `>>> Soy un bot multifuncional en constante desarrollo. Por ahora cuento con comandos de **moderación**, **información**, **utilidad** y otros extras más!`)
      .addField(`${emoji.estado} **__Estadísticas__**`,
       `>>> **Usuarios totales:** \`${client.users.cache.size} usuarios\`
            **Servidores totales:** \`${client.guilds.cache.size} servidores\`
            **Comandos totales:** \`${client.commands.map(a=>a).length} comandos\``)
      .addField(`${emoji.enlace} **__Enlaces__**`, "**[GitHub](https://github.com/Massuk)** | **[Servidor de Soporte](https://discord.gg/TNs9Qjvjcc)**")
      .setThumbnail(`https://cdn.discordapp.com/attachments/954077713486987415/954206312718270474/standard.gif`)
      .setImage(`https://cdn.discordapp.com/attachments/954077713486987415/954198019283226664/standard_4.gif`)
      .setFooter(`© Halcyon | version 1.0`)

    const embedModeracion = new discord.MessageEmbed()
      .setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org/')
			.setDescription('Some description here')
    //! EMBEDS
    
    //! BOTONES
    const rowboton = new discord.MessageActionRow()
    .addComponents(
      new discord.MessageButton()
      .setCustomId("botonCerrarMenu")
      .setLabel("Cerrar menú")
      .setStyle("DANGER")
      .setEmoji("☠️")
    )
    //! BOTONES


    //! MENU
      const rowmenu = new discord.MessageActionRow()
      .addComponents(
          new discord.MessageSelectMenu()
          .setCustomId("menuHelp")
          .setPlaceholder("Selecciona una opción")
          .addOptions([
              {
                  label: "Moderacion",
                  description: "Comandos de moderacion",
                  value: "moderation",
                  emoji: "🧑‍✈️"
              }
          ])
      )
        
      let mensaje = await message.channel.send({ embeds: [embedPrincipal], components: [rowmenu, rowboton]})

      const filtro = i => i.user.id === message.author.id; 

      let collector = mensaje.createMessageComponentCollector({ filter: filtro})

      collector.on("collect", async menu => {
        if (menu.values[0] === "moderation")
        {
            await menu.deferUpdate()
            menu.editReply({ content: "Ok", embeds: [embedModeracion], components: [rowmenu, rowboton]})
        }
      })

    //! MENU


    }
  }