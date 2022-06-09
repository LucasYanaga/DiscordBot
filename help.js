
const { MessageEmbed, MessageButton, MessageActionRow, MessageCollector } = require('discord.js');



module.exports = {
    name: "help",
    description: '(Help) - Veja minha lista de Comandos',
    
run: async(client, message, args) => {
 

    const button21 = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId("categoria_utilidade")
                .setStyle("PRIMARY")
                .setLabel("🔧 Utilidade")
                .setDisabled(false),
                new MessageButton()
                .setCustomId("categoria_diversao")
                .setStyle("PRIMARY")
                .setLabel("😝 Diversão")
                .setDisabled(false),
                new MessageButton()
                .setCustomId("categoria_musica")
                .setStyle("PRIMARY")
                .setLabel("🎵 Música")
                .setDisabled(false),
                new MessageButton()
                .setCustomId("categoria_nsfw")
                .setStyle("PRIMARY")
                .setLabel("😈 NSFW")
                .setDisabled(false),
                new MessageButton()
                .setCustomId("fechar")
                .setStyle("DANGER")
                .setLabel("Fechar Painel")
                .setDisabled(false)
                )
               
    const Painel = new MessageEmbed()
        .setTitle(`Painel de Comandos | ${client.user.username}`)
        .setDescription(`:wave: Olá ${message.author} 📄 Veja a lista de comandos disponíveis:\n\n> **Utilize os botões abaixo para visualizar meus comandos.**\n\n`)
        .setColor(`PURPLE`)
        .setThumbnail(message.guild.iconURL())
    const m = await message.channel.send({ embeds: [Painel], components: [button21]})

    const iFilter = i => i.user.id === message.author.id;
    
    const collector = m.createMessageComponentCollector({ filter: iFilter, time: 10 * 60000 });

        collector.on('collect', async(i) => {
            i.deferUpdate()
            switch (i.customId) {
                case `categoria_utilidade`:
                    m.edit({
                        embeds: [
                            
                            new MessageEmbed()
                                .setTitle(` Utilidade | ${client.user.username}`)
                                .setDescription(
                                                `> Olá Aqui esta meus comandos de \`🔧 Utilidade 🔧\`.\n\n` +
                                                `**Lista De Comandos Abaixo:**\n` +
                                                `$copa \n` +
                                                `$user \n`)
                                .setColor(`PURPLE`)
                                .setThumbnail(message.guild.iconURL())
                                .setTimestamp()
                        ]
                    })
                  break;
                case `categoria_diversao`:
                    m.edit({
                        embeds: [
                            new MessageEmbed()
                                .setTitle(` Diversão | ${client.user.username}`)
                                .setDescription(
                                                `> Olá Aqui esta meus comandos de \`😝 Diversão 😝\`.\n\n` +
                                                `**Lista De Comandos Abaixo:**\n` +
                                                `$nagale\n` +
                                                `$brazzers (@usuario)\n` +
                                                `$comunismo (@usuario)\n` +
                                                `$dab (@usuario)\n` +
                                                `$egg (@usuario)\n` +
                                                `$fakenews (@usuario)\n` +
                                                `$meme1\n` +
                                                `$lixo (@usuario)\n` +
                                                `$roblox (@usuario)\n` +
                                                `$twitter (@usuario) (texto)\n` +
                                                `$youtube (@usuario) (texto)\n` +
                                                 ``)
                                .setColor(`PURPLE`)
                                .setThumbnail(message.guild.iconURL())
                                .setTimestamp()
                        ]
                    })
                    break;
                    case `categoria_musica`:
                    m.edit({
                        embeds: [
                            new MessageEmbed()
                                .setTitle(` Música | ${client.user.username}`)
                                .setDescription(
                                                `> Olá! Aqui esta meus comandos de \`🎵 Música 🎵\`.\n\n` +
                                                `**Lista De Comandos Abaixo:**\n` +
                                                `$filters ("3d","bassboost","echo","karaoke","nightcore","vaporwave","flanger")\n` +
                                                `$play (nome da música)\n` +
                                                `$queue\n` +
                                                `$stop\n` +
                                                `$skip\n` +
                                                `$shuffle\n` +
                                                 ``)
                                .setColor(`PURPLE`)
                                .setThumbnail(message.guild.iconURL())
                                .setTimestamp()
                        ]
                    })
                  break;
                  case `categoria_nsfw`:
                    m.edit({
                        embeds: [
                            new MessageEmbed()
                                .setTitle(` Diversão | ${client.user.username}`)
                                .setDescription(
                                                `> Olá Aqui esta meus comandos de \`😈 NSFW 😈\`.\n\n` +
                                                `**Lista De Comandos Abaixo:**\n` +
                                                `$ass \n` +
                                                `$boobs1\n` +
                                                `$boobs2\n` +
                                                `$pussy1\n` +
                                                `$pussy2\n` +
                                                `$solo\n`)
                                .setColor(`PURPLE`)
                                .setThumbnail(message.guild.iconURL())
                                .setTimestamp()
                        ]
                    })
                  break;
                case `fechar`:
                   setTimeout(() => m.delete(), 100)
                
            }
        })

    }
}





/*
const Discord = require('discord.js');

var fs = require('fs');
var files = fs.readdirSync('./commands/');

module.exports.run = async (client, message, args) =>{
    let embed_color = "PURPLE"
    
    let msg = '';

    for (const file of files) {
        msg += '- ' + file.replace('.js', '') + '\n'
      }

    let embed_1 = new Discord.MessageEmbed()
        .setTitle("Comandos:")
        .setDescription(msg);

    let nagale = await message.reply({embeds: [embed_1]})

}

*/