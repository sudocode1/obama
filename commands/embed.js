const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embedText = args[0];
    let embedEmbed = new Discord.RichEmbed()
    .setTitle("Custom Embed")
    .addField(`${message.author.tag}`, `${embedText}`);
    message.channel.send(embedEmbed);
    }


module.exports.help = {
    name: "embed"
}