//BOT TOKEN OTUzMzgyOTA5OTE2NjQzMzM4.YjDxBg.3vX34Vmc8TsB-3VTi7Qvpsn8yFI
//LINK INVITACION https://discord.com/api/oauth2/authorize?client_id=953382909916643338&permissions=0&scope=bot

require("dotenv").config();

const discord = require("discord.js");
const client = new discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

//! MONGO DB

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.once("open", () => {
  console.log(`${client.user.username} se ha conectado correctamente a la Database`);
});

//! CODIGO

client.commands = new discord.Collection();
client.events = new discord.Collection();

["commandHandler", "eventHandler"].forEach((file) => {
  require(`./handlers/${file}`)(client, discord);
});

//! CODIGO

//* ENVIAR MENSAJE AL OWNER CUANDO EL BOT ES AÑADIDO A UN SERVIDOR NUEVO

client.on('guildCreate', async guild => {
  let owner = await client.users.fetch('682588153407995961')
  owner.send(new Discord.MessageEmbed()
  .setTitle("New Guild!")
  .setDescription(`He sido agregado ah **${guild.name}**, el servidor cuenta con **${guild.memberCount}** miembros`)
  .setColor("BLACK"))
} )    



client.login(process.env.TOKEN);