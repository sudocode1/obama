const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send("no");
    let purgeAmount = args[0];
    message.channel.bulkDelete(`${purgeAmount}`)
    message.channel.send(`${purgeAmount} purged!`)
}


module.exports.help = {
    name: "purge"
}