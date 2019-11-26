const botconfig = require("./botconfig.json"); // put in a seperate file to look neater and to make the code look good
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});








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
    bot.user.setActivity("you", {type: "WATCHING"})
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.channel.send("My commands are unvailable in DMs!");
    if(!message.content.startsWith("o!")) return;
    

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

 
    




    // credit to TSC for help with this [kick]

    

       
    

    
});

bot.login(botconfig.token)