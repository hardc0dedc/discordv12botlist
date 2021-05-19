const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
    let botisim = args[0]
  let sahip = args[1]
  let sebep = args.slice(2).join(" ");
  
  
  
    let log = "844584180066811904" // bot log kanalı
  const red = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`**<@${sahip}> Adlı Kişinin <@${botisim}> adlı Botu Reddedildi! \nSebep : ${sebep}\nReddeden Yetkili : ${message.author}**`)
    
    if (!botisim) return message.channel.send(`**:no_entry: Botun idsini yazmalısın!**`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`**:no_entry: Botu neden onaylamadığını yazmalısın!**`).then(msg => msg.delete(10000))
    if (!sahip) return message.channel.send(`**:no_entry: Bot Sahibi id yazman lazım!**`).then(msg => msg.delete(10000))
  message.delete()
        client.channels.cache.get(log).send(red);
        message.channel.send(`**Botu reddettiniz!**`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reddet'],
  permLevel: 3
};

exports.help = {
  name: 'botreddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};