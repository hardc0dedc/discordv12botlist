const Discord = require('discord.js');

///
exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın!**`);
    let botisim = args[0]
  let sahip = args[1]
  
    let log = "844584180066811904" // bot log kanalı
  let guild1 = "830146072998314034"//DEVELOPER ROLÜ VERİLCEK SUNUCU İD
  let devrole = "831046568090009630"//DEVELOPER ROLÜ İD 
  const onay = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`**<@${sahip}> Adlı Kişinin <@${botisim}> Adlı Botu Onaylandı! \nOnaylayan Yetkili : ${message.author}**`)
    
    if (!botisim) return message.channel.send(`**:no_entry: Botun idsini yazmalısın!**`).then(msg => msg.delete(10000))
  message.delete()
        client.channels.cache.get(log).send(onay)      
  message.channel.send(`**Botu onayladınız!**`).then(msg => msg.delete(1000))
  client.guilds.cache.get(guild1).members.cache.get(sahip).roles.add(devrole); // ONAYLANINCA OTOMATİK DEVELOPER ROLÜ VERİYOR
 
};
/////FİBER CODE
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['onayla'],
  permLevel: 3
};

exports.help = {
  name: 'botonayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};