const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
        let user = new Discord.RichEmbed()
        .setTitle("User Info")
        .setColor("#6437fa")
        .setFooter(`Requested by ${message.author.tag}`)
        .addField("Username", message.author.tag)
        .addField("ID", message.author.id)
        .addField("Created At", message.author.createdAt)
        .addField("Server", message.guild.name)

        return message.channel.send(user);
    
    }


module.exports.help = {
    name: "userinfo"
}