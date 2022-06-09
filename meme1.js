const Discord = require('discord.js');
const meme = require("discord.js-memes")
const {eMeme, sMeme, all} = require("discord.js-memes")

module.exports.run = async (client, message, args) =>{
    let embed_color = "PURPLE"
    
    const image = new eMeme().setType(1)

    let embed_1 = new Discord.MessageEmbed()
        .setColor(embed_color)
        .setImage(image)

    let nagale = await message.reply({embeds: [embed_1]})
}