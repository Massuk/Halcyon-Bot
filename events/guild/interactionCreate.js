module.exports = async (client, discord, interaction) => {

    //# COMMANDS
    if (interaction.isCommand()) {
      const command = client.slash.get(interaction.commandName);
      try {
        command.run(client, interaction);
      } catch (error) {
        console.log("Error iC: " + error);
      }
    }
    //# COMMANDS

    //& MENU
    if (interaction.isSelectMenu()) {
        if (interaction.customId == "menuHelp") {
        interaction.deferReply({ ephemeral: true });

        switch (interaction.values[0]) {
            case "moderation":
            interaction.followUp({ content: "Menu de moderacion" });
            break;
            case "information":
            interaction.followUp({ content: "Menu de informacion" });
            break;

        default:
            interaction.followUp({ content: "Error" });
          break;
      }
    }
  }
  //& MENU
  };