const Discord = require('discord.js');
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports.run = async (client, message, args) =>{
    let embed_color = "PURPLE"
    
    const image = await nsfw.fourk();

    let embed_1 = new Discord.MessageEmbed()
        .setDescription("neko")
        .setColor(embed_color)
        .setImage(image)

    let nagale = await message.reply({embeds: [embed_1]})

}