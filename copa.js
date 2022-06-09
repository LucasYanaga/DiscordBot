const Discord = require('discord.js');

module.exports.run = async (client, message, args) =>{
    let embed_color = "PURPLE"

    var hoje = new Date();
    var copa = new Date(2022, 10, 21, 12, 0);

    var diferenca = copa.getTime() - hoje.getTime();

    const diasCopa = Math.round(diferenca / (1000 * 3600 * 24));

    let embed_1 = new Discord.MessageEmbed()
        .setColor(embed_color)
        .setDescription(`⚽️ Faltam ${diasCopa} dias para copa! ⚽️`)

    let nagale = await message.reply({embeds: [embed_1]})

}