const Discord = require("discord.js");
var responses = [
    "yes",
    "no",
    "ask me later",
    "go away"
]


module.exports.run = async (bot, message, args) => {
    if (args[0]) {
        message.channel.send(":8ball: "+ responses[Math.floor(Math.random() * responses.length)]);
     } else {
message.channel.sendMessage("No question provided.");
}
}

module.exports.help = {
    name: "8ball"
}