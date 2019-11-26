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
    bot.user.setActivity("you | o!help", {type: "WATCHING"})
});

bot.on("guildMemberAdd", async member => {
    console.log(`${member.id} joined a server.`);

    let welcomechannel = member.guild.channels.find(`name`, `welcome`);
    welcomechannel.send(`${member} has joined!`)
});

bot.on("guildMemberRemove", async member => {
    console.log(`${member.id} left a server.`);

    let welcomechannel = member.guild.channels.find(`name`, `welcome`);
    welcomechannel.send(`${member} has left!`)
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.channel.send("My commands are unvailable in DMs!");

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        }
    }

    let prefix = prefixes[message.guild.id].prefixes;
    
    if(!message.content.startsWith(`${prefix}`)) return;
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

 
    




    // credit to TSC for help with this [kick]

    

       
    

    
});


  



bot.login(botconfig.token)