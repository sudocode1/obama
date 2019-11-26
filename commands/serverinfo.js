const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let server = new Discord.RichEmbed()
        .setTitle("Server Info")
        .setColor("#6437fa")
        .setFooter(`Requested by ${message.author.tag}`)
        .addField("Server Name", message.guild.name)
        .addField("Created At", message.guild.createdAt)
        .addField("You joined at", message.member.joinedAt)
        .addField("Member Count", message.guild.memberCount)
        .addField("Guild ID", message.guild.id)
        .addField("Region", message.guild.region)
        .addField("Verification Level", `${message.guild.verificationLevel} / 5`)
        .addField("Partnered", message.guild.verified)
        .addField("Server Owner", message.guild.owner)
        .addField("Server Owner ID", message.guild.ownerID)

        return message.channel.send(server);
    }


module.exports.help = {
    name: "serverinfo"
}