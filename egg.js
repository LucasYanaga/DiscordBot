const Meme = require("memer-api")
const Discord = require("discord.js")
const memer = new Meme('YJcBfwDwB86');

module.exports.run = async (client, message, args) =>{
    var avatar1 = message.mentions.members.first().displayAvatarURL();

    if(avatar1 == null){
        var avatar1 = message.author.displayAvatarURL();
    }

    memer.egg(avatar1).then(image => {
        let embed_color = "PURPLE"

        var attachment = new Discord.MessageAttachment(image, "dab.png");

        let embed_1 = new Discord.MessageEmbed()
        .setColor(embed_color)
        .setTitle('Vc foi eggzado hehe 🍳🥚')
        .setImage('attachment://dab.png');

        let nagale = message.channel.send({ embeds: [embed_1], files: [attachment] });
    })
}
    


