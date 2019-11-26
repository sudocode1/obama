const Discord = require("discord.js");

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

module.exports.run = async (bot, message, args) => {
        message.channel.send(pingResponse[Math.floor(Math.random() * pingResponse.length)]);
    }


module.exports.help = {
    name: "ping"
}