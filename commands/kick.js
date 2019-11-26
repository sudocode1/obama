const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Invalid Arguments.");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("nice try");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.reply("That person is unable to be kicked!");



        let kickEmbed = new Discord.RichEmbed()
        .setDescription("Kick")
        .setColor("#ff0000")
        .addField("Kicked User", `${kUser} with the ID ${kUser.id}`)
        .addField("Kicked by", `<@${message.author.id}> with the ID ${message.author.id}`)
        .addField("Time", message.createdAt)
        .addField("Reason", kReason);

        let kickChannel = message.guild.channels.find(`name`, `warnings`);
        if(!kickChannel) return message.channel.send("#warnings is not found!");

        message.channel.send("Member Kicked!")
        message.guild.member(kUser).kick(kReason)
        kickChannel.send(kickEmbed);


        return;
    }


module.exports.help = {
    name: "kick"
}