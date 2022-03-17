module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Muestra el panel de ayuda con todos los comandos",
    run: async (client, message, args, discord) => {
    
        const panelHelp = new discord.MessageSelectMenu()
        .setCustomId("menuHelp")
        .setPlaceholder("Selecciona una opcion")
        .addOptions([
            { label: "Moderacion", description: "Comandos de moderacion", value: "moderation"}
        ])

        const filaMenu = new discord.MessageActionRow().addComponents(panelHelp);

        message.channel.send( {
            content: "Menu de ayuda",
            components: [filaMenu],
    });

    }
  }