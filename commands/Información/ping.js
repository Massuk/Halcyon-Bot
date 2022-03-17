module.exports = {
    name: "ping",
    aliases: ["apims"],
    description: "Muestra el ping del bot",
    run: async (client, message, args, discord) => {
        message.channel.send("Pong 🍕");
    }
}