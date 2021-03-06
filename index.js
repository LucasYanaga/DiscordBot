const Discord = require('discord.js');
const config = require("./config.json");
const { DisTube } = require('distube')
const { SpotifyPlugin } = require('@distube/spotify')
const { YtDlpPlugin } = require('@distube/yt-dlp')
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"]});

client.distube = new DisTube(client, {
    leaveOnStop: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
    plugins: [
      new SpotifyPlugin({
        emitEventsAfterFetching: true
      }),
      new YtDlpPlugin()
    ],
    youtubeDL: false
  })

client.login(config.token);

client.on('ready', () => {
    console.log('Ready!')


})

client.on('messageCreate', async message => {
    if (message.author.id === '416759529045360640') {
        var jamal = [
            'Lรก vem o Jamal Techno falar merda...', 
            'Ooooo Jarride!', 
            'safoda vc', 
            'LMAO ๐', 
            '?????', 
            'Isso รฉ Melodic Techno?? ๐๐ต', 
            'bot NAGALE nรฃo aguenta mais Jamal ๐ต',
            'Vdd concordo lindah!! ๐๐๐'];
        
        message.reply(jamal[Math.floor(Math.random()*jamal.length)]);
    }

    if (message.author.id === '332200602245529600'){
        var ale = [
            'XANDDEGUEMON!!', 
            'Carai Xandilso ๐ณ๐ณ',
            'safoda vc',
            'xoxo capenga',
            'LMAO ๐',
            'Se foda รฉ o mano peida',
            'Xandinha ta bostejando... ๐ช',
            'SHITS FIRE BRO!! ๐ฅ๐ฅ'
        ];
        
        message.reply(ale[Math.floor(Math.random()*ale.length)]);
    }

    if (message.author.id === '288741696576159754'){
        message.reply('bctinha')
    }

    if(!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
    if(message.author.bot) return;
    if(message.channel.type == 'dm') return;

    const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);
    const command = args.shift().toLowerCase();

    try{
        const file = require(`./commands/${command}.js`)
        file.run(client, message, args);
        
    } catch(err){
        console.error('Erro: ' + err);
    }

});

const status = queue =>
  `๐ Volume: \`${queue.volume}%\` \n ๐ข Filter: \`${queue.filters.join(', ') || 'Off'}\` \n ๐ Loop: \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'
  }\` \n โญ Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``

  client.distube
  .on('playSong', (queue, song) => {

    let embed_1 = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setThumbnail(song.thumbnail)
    .setTitle(` โถ | ${song.name} - ${song.formattedDuration}`)
    .setDescription(`${status(queue)}`)
    .setFooter({ text: `๐โโ๏ธ Pedido por ${song.user.username}`, iconURL: song.user.avatarURL() })
    .setURL(song.url)

    queue.textChannel.send({ embeds: [embed_1] })
    })
  .on('addSong', (queue, song) =>{

    let embed_1 = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setThumbnail(song.thumbnail)
    .setTitle(` โ | ${song.name} - \`${song.formattedDuration}\` foi adicionada na fila!`)
    .setFooter({ text: `๐โโ๏ธ Adicionado por ${song.user.username}`, iconURL: song.user.avatarURL() })
    .setURL(song.url)

    queue.textChannel.send({ embeds: [embed_1] })
  })
  .on('addList', (queue, playlist) =>{
    let embed_1 = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setThumbnail(song.thumbnail)
    .setTitle(` โ | \`${playlist.name}\` playlist (${playlist.songs.length} songs) adicionada na fila! \n${status(queue)}`)
    .setFooter({ text: `๐โโ๏ธ Adicionado por ${song.user.username}`, iconURL: song.user.avatarURL() })
    .setURL(song.url)

    queue.textChannel.send({ embeds: [embed_1] })
    })
  .on('error', (channel, e) => {
    channel.send(` โ | Erro: ${e.toString().slice(0, 1974)}`)
    console.error(e)
  })
  .on('empty', channel => channel.send('Canal de voz vazio! Vazando...'))
  .on('searchNoResult', (message, query) =>
    message.channel.send(` โ | Sem resultado para: \`${query}\`!`)
  )