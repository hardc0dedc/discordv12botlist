const Discord = require('discord.js');

/////
exports.run = function(client, message, args) {

    let botid = args[0]
    let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = "844584180066811904"// başvurunun gideceği kanal
    let kanal = "844584163780067348" // başvurunun yapılacağı kanal
  let log = "844584180066811904" // bot log kanalı
    
  if (message.channel.id !== kanal) return message.channel.send(`**Bu komutu sadece <#${kanal}> kanalında kullanabilirsin!**`).then(msg => msg.delete(10000))
    if (message.channel.id == kanal) {
  if (!botid) return message.channel.send(`**:no_entry: Botunun ID'sini yazmalısın!**`).then(msg => msg.delete({timeout:3000}))
  if (!prefix) return message.channel.send(`**:no_entry: Botunun prefixini yazmalısın!**`).then(msg => msg.delete({timeout:3000}))
  if (!onaylımı) return message.channel.send(`**:no_entry: Botunun Dbl onaylımı onu yazmalısın!**`).then(msg => msg.delete({timeout:3000}))
  message.delete()
  const basvuruuu = new Discord.MessageEmbed()
  .setColor("#F91E10")
  .setDescription(`**${message.author} Adlı Kullanıcının <@${botid}> Adlı Botu Sıraya Eklendi! Botu Onaylanmayı Bekliyor!**`)
  const embed = new Discord.MessageEmbed()
  .setColor("#F47FFF")
  .setDescription(`[Botu Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle("Cloud Code")
  .addField(`Bot Sahibi  ${message.author.tag}  (${message.author.id})`)
  .addField("Bot ID", botid)
  .addField("Bot Prefix", prefix)
  .addField("Bot Onaylımı?", onaylımı)
  client.channels.cache.get(basvuru).send(embed)
  client.channels.cache.get(log).send(basvuruuu)
  message.channel.send(`**Bot ekleme isteğiniz alındı!**`).then(msg => msg.delete({timeout:1000}))
  }
};
///
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botekle','bot-ekle'],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};