const Discord = require('discord.js');

module.exports.run = async (client, message, args) =>{
    let embed_color = "PURPLE"
    
    let embed_1 = new Discord.MessageEmbed()
        .setColor(embed_color)
        .setDescription('dae puta')

    let nagale = await message.reply({embeds: [embed_1]})
 
}