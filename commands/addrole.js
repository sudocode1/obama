const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("yea no");
let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!rMember) return message.reply("No user specified.");
let role = message.guild.roles.find(r => r.name.toLowerCase() === args.slice(1).join(" ").toLowerCase())
if(!role) return message.role("No role specified.");
if(message.member.highestRole.position <= role.position) return message.channel.send('You aren\'t high enough in the role hierchy!');
    
if(rMember.roles.has(role.id)) return message.reply("They already have that role.");
await(rMember.addRole(role.id));

message.channel.send(`Given the role ${role.name} to <@${rMember.id}>`)

}

module.exports.help = {
    name: "addrole"
}