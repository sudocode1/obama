const Discord = require("discord.js")
let prefix = "o!"

module.exports.run = async (bot, message, args) => {
        let help = new Discord.RichEmbed()
        .setTitle("Command List")
        .setColor("#6437fa")
        .setFooter("Created by iris#2805")
        .addField(`${prefix}help`, "This command!")
        .addField(`${prefix}ping`, "Check if the bot is running along with the response time! (ms)")
        .addField(`${prefix}serverinfo`, `Server Info`)
        .addField(`${prefix}userinfo`, "Your user info")
        .addField(`${prefix}kick @user reason`, "Kick a user [Requires a channel called #warnings] ")
        .addField(`${prefix}ban @user reason`, "Ban a user [Requires a channel called #warnings and a role called muted ALL LOWERCASE]")
        .addField(`${prefix}mute @user 1/s/m/h/d`, "Mute a user [Requires a channel called #warnings]")
        .addField(`${prefix}8ball question`, "Roll the 8ball!")
        .addField(`${prefix}addrole @user role`, "Add a role to a user")
        .addField(`${prefix}removerole @user role`, "Remove a role from a user")
        .addField(`${prefix}warn @user reason`, "Warn a user [Requires a channel called #warnings]")
        .addField(`${prefix}prefix <newprefix>`, "Changes the prefix in your server")
        .addField(`${prefix}embed <text>`, `Custom embed`)
        .addField(`${prefix}purge <number>`, `Purge (delete) an amount of messages`)
        .addField(`${prefix}invite`, "Invite the bot")
        .addField(`${prefix}server`, "Link to the support server")
        return message.channel.send(help);
    
}

module.exports.help = {
    name: "help"
}