const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    message.reply("https://discordapp.com/api/oauth2/authorize?client_id=648823742419697674&permissions=2147483127&scope=bot")
    
}

module.exports.help = {
    name: "invite"
}