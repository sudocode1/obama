const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Invalid Arguments.");
        let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("nice try");
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.reply("That person is unable to be banned!");



        let banEmbed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#ff0000")
        .addField("Banned User", `${bUser} with the ID ${bUser.id}`)
        .addField("Banned by", `<@${message.author.id}> with the ID ${message.author.id}`)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason);

        let banChannel = message.guild.channels.find(`name`, `warnings`);
        if(!banChannel) return message.channel.send("#warnings is not found!");

        message.channel.send("Member banned!");
        message.guild.member(bUser).ban(bReason);
        banChannel.send(banEmbed);


        return;
    
}

module.exports.help = {
    name: "ban"
}