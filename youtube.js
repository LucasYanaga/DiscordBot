const Meme = require("memer-api")
const Discord = require("discord.js")
const memer = new Meme('YJcBfwDwB86');

module.exports.run = async (client, message, args) =>{
    //const avatar2 = client.user.displayAvatarURL()

    var avatar1 = message.mentions.members.first().displayAvatarURL();

    if(avatar1 == null){
        var avatar1 = message.author.displayAvatarURL();
    }

    var list = message.content.split(' ');
    var slice = list.slice(2, list.lenght);
    var text = slice.join(' ');

    console.log(text);

    memer.youtube(avatar1, message.mentions.members.first(), text).then(image => {
        let embed_color = "PURPLE";

        var attachment = new Discord.MessageAttachment(image, "dab.png");

        let embed_1 = new Discord.MessageEmbed()
        .setColor(embed_color)
        .setTitle('YouTube 🟥')
        .setImage('attachment://dab.png');

        let nagale = message.channel.send({ embeds: [embed_1], files: [attachment] });
    })
}
    


