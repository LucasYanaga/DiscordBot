module.exports = {
    name: 'stop',
    aliases: ['disconnect', 'leave'],
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`❌} | Não da pra pausar oq não está tocando né burro`)
      queue.stop()
      message.channel.send(`✅ | Stopped!`)
    }
  }