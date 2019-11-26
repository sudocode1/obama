const Discord = require("discord.js")
let prefix = "o!"

module.exports.run = async (bot, message, args) => {
        let help = new Discord.RichEmbed()
        .setTitle("Command List")
        .setColor("#6437fa")
        .addField(`${prefix}help`, "This command!")
        .addField(`${prefix}ping`, "Check if the bot is running along with the response time! (ms)")
        .addField(`${prefix}serverinfo`, `Server Info`)
        .addField(`${prefix}userinfo`, "Your user info")
        .addField(`${prefix}kick @user reason`, "Kick a user")
        .addField(`${prefix}ban @user reason`, "Ban a user")
        return message.channel.send(help);
    
}

module.exports.help = {
    name: "help"
}