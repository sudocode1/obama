const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("nice try");
    let name = args[0];
    let name2 = name
    message.guild.createChannel(`${name}`,{ type: 'text' });
    let createdChannel = message.guild.channels.find(`name`, `${name2}`);
    message.channel.send(`Channel Created! <#${createdChannel.id}>`);
}


module.exports.help = {
    name: "createchannel"
}