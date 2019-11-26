const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    
    let tomute = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("o!tempmute user 1s/m/h/d");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't mute this user!");
    let muterole = message.guild.roles.find('name', 'muted');
    if(!muterole) return message.reply(`Create a role called muted (MUST BE ALL LOWERCASE) and set up the permissions.`);

    let mutetime = args[1];
    if(!mutetime) return message.reply("Time not specified.");

    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> has been muted for ${ms(mutetime)}ms`);
    let muteEmbed = new Discord.RichEmbed()
        .setDescription("Mute")
        .setColor("##b3b1b1")
        .addField("Muted User", `${tomute} with the ID ${tomute.id}`)
        .addField("Muted by", `<@${message.author.id}> with the ID ${message.author.id}`)
        .addField("Time Muted", message.createdAt)
        .addField("Mute length", mutetime);

        let muteChannel = message.guild.channels.find(`name`, `warnings`);
        if(!muteChannel) return message.channel.send("#warnings not found!")
        muteChannel.send(muteEmbed)

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted!`)
        let unmuteEmbed = new Discord.RichEmbed()
        .setDescription("Unmute")
        .setColor("#b3b1b1")
        .addField("Unmuted User", `${tomute} with the ID ${tomute.id}`)
        .addField("Unmuted by", `Automod`)
        .addField("Time Unmuted", message.createdAt)
        .addField("Mute length", mutetime);

        let muteChannel = message.guild.channels.find(`name`, `warnings`);
        if(!muteChannel) return message.channel.send("#warnings not found!")
        muteChannel.send(unmuteEmbed)
    }, ms(mutetime));
}


module.exports.help = {
    name: "mute"
}