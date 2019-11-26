const botconfig = require("./botconfig.json"); // put in a seperate file to look neater and to make the code look good
const Discord = require("discord.js");
const bot = new Discord.Client()

var pingResponse = [
    "pon g",
    "pong",
    "pong lol",
    "epic pong moment",
    "ping pong",
    "pONG",
    "po ng",
    "p ong"
]

bot.on("ready", async () => {
    console.log(`${bot.user.tag} is online!`)
    bot.user.setPresence({ game: { name: 'o!help' }, status: 'online' })
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.channel.send("My commands are unvailable in DMs!");

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}ping`){
        message.channel.send(pingResponse[Math.floor(Math.random() * pingResponse.length)]);
    }

    if(cmd === `${prefix}help`){
        let help = new Discord.RichEmbed()
        .setTitle("Command List")
        .setColor("#6437fa")
        .addField(`${prefix}help`, "This command!")
        .addField(`${prefix}ping`, "Check if the bot is running along with the response time! (ms)")
        .addField(`${prefix}serverinfo`, `Server Info`)
        .addField(`${prefix}userinfo`, "Your user info")
        return message.channel.send(help);
    }

    if(cmd === `${prefix}serverinfo`){
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

    if(cmd === `${prefix}userinfo`){
        let user = new Discord.RichEmbed()
        .setTitle("User Info")
        .setColor("#6437fa")
        .setFooter(`Requested by ${message.author.tag}`)
        .addField("Username", message.author.tag)
        .addField("ID", message.author.id)
        .addField("Created At", message.author.createdAt)
        .addField("Server", message.guild.name)

        return message.channel.send(user);
    }
});

bot.login(botconfig.token)