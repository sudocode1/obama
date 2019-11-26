const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("nice try");
    if(!args[0] || args[0 == this.help]) return message.reply("Usage: o!prefix <newprefix>");

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };
    
    fs.writeFile("prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let pEmbed = new Discord.RichEmbed()
    .setColor("6437fa")
    .setTitle("Prefix change")
    .setDescription(`Set to ${args[0]}`);

    message.channel.send(pEmbed);
}


module.exports.help = {
    name: "prefix"
}