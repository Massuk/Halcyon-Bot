module.exports = {
    name: "clear",
    aliases: ["pruning", "del", "clearmessages"],
    description: "Borra una cierta cantidad de mensajes",
    run: async(client, message, args, discord) => {
      if (!args[0])  return message.reply("Ingresa el **número de mensajes** a borrar")
      .then(msg => {
        setTimeout(() => msg.delete(), 5000)
      })
      .catch(/*Aqui va el error handler si el mensaje no se devuelve, envía, etc.*/);;

      if (isNaN(args[0])) return message.reply("No has escrito un **número**")
      .then(msg => {
        setTimeout(() => msg.delete(), 5000)
      })
      .catch(/*Aqui va el error handler si el mensaje no se devuelve, envía, etc.*/);;

      if (args[0] > 100) return message.reply("Debe ser un número menor a 100")
      .then(msg => {
        setTimeout(() => msg.delete(), 5000)
      })
      .catch(/*Aqui va el error handler si el mensaje no se devuelve, envía, etc.*/);;

      if (args[0] < 1) return message.reply("Debe ser un número mayor a 0")
      .then(msg => {
        setTimeout(() => msg.delete(), 5000)
      })
      .catch(/*Aqui va el error handler si el mensaje no se devuelve, envía, etc.*/);;
  
      await message.channel.messages
        .fetch({ limit: args[0] })
        .then((messages) => {
          message.channel.bulkDelete(messages);
        });
    },
  };

