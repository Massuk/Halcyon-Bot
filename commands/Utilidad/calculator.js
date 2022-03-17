const simplydjs = require('simply-djs')

module.exports = {
  name: "calc",
  aliases: ["calculator"],
  description: "unbans member",
  run: async (client, message, args) => {
  simplydjs.calculator(message, {
      embedColor: 'b9f2ff', //default: #075FFF
    })
  }
}