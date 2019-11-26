const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("yea no");
let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!rMember) return message.reply("No user specified.");
let role = args.join(" ").slice(22);
if(!role) return message.role("No role specified.");
let gRole = message.guild.roles.find(`name`, role);
if(!gRole) return message.reply("Role not found. Role names are cAsE sEnSiTiVe.");

if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
await(rMember.addRole(gRole.id));

message.channel.send(`Given the role ${gRole.name} to <@${rMember.id}>`)

}

module.exports.help = {
    name: "addrole"
}