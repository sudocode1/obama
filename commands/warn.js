const Discord = require("discord.js")
let prefix = "o!"

module.exports.run = async (bot, message, args) => {
    let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!wUser) return message.channel.send("Invalid Arguments.");
    let wReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("nice try");
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("That person is unable to be warned!");



    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warn")
    .setColor("#ff0000")
    .addField("Warned User", `${wUser} with the ID ${wUser.id}`)
    .addField("Warned by", `<@${message.author.id}> with the ID ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", wReason);

    let warnChannel = message.guild.channels.find(`name`, `warnings`);
    if(!warnChannel) return message.channel.send("#warnings is not found!");

    message.channel.send("Member Warned!")
    warnChannel.send(warnEmbed);


    return;
}

module.exports.help = {
    name: "warn"
}