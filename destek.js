const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

client.on("ready", guild => {
    client.user.setPresence({ game: { name: `7/24 Destek Sistemi | Aktif`, type: 0 } });
});
client.on('message', msg => {
   if (msg.content.toLowerCase() === 'gecikme') {
	       if(!msg.guild) return
    msg.channel.send(`**Sizlere ${client.ping} mili saniye de hizmet veriyorum.**`);
  }
   if (msg.content.toLowerCase() === 'ping') {
	       if(!msg.guild) return
    msg.channel.send(`**Sizlere ${client.ping} mili saniye de hizmet veriyorum.**`);
  }
   if (msg.content.toLowerCase() === 'destek') {
   if(!msg.guild) return
    msg.reply('**Merhaba! Size nasıl yardımcı olabilirim?** ``destek 1-5``\n  _**Bot komudu uygulamıyor**_\n   ``1``\n\n  _**Bot çok yavaş**_\n   ``2``\n\n _**Bot komutları cevap vermiyor**_\n   ``3``\n\n _**Bot komudu kullanmama izin vermiyor**_\n   ``4``\n\n _**Canlı destek**_\n   ``5``\n\n© Fırat#6846 | Tüm Hakları Saklıdır');
  }
   if (msg.content.toLowerCase() === 'destek 1') {
	       if(!msg.guild) return
    msg.channel.send('```\nRO-BOT`un uygulamamasının sebebi botun yetkisi olmaması olabilir yada o komut kısa süreliğine kapanmış, kilitlenmiş olabilir.\n```');
  }
   if (msg.content.toLowerCase() === 'destek 2') {
	       if(!msg.guild) return
    msg.channel.send('```\nBotun yavaş çalışmasının sebebi botun sanal bilgisayarı yavaş olabilir yada sunucunuzun bölgesi Türkiye lokasyonuna yada oturduğunuz ülkeye uzak bir lokasyonda olabilir. Türkiye`ye yakın lokasyon: Western Europe. Bunu sunucu ayarlarından yababilirsiniz.\n```');
  }
   if (msg.content.toLowerCase() === 'destek 3') {
	       if(!msg.guild) return
    msg.channel.send('```\nBotun komutları cevap vermemesinin sebebi botun kapalı olması.\n```');
  }
   if (msg.content.toLowerCase() === 'destek 4') {
	       if(!msg.guild) return
    msg.channel.send('```\nBot komutları izin vermemesinin sebebi her kodun ayrı yetkisi olanlar kullanabildiği için.```');
  }
   if (msg.content.toLowerCase() === 'destek 5') {
	       if(!msg.guild) return
    client.channels.get("429282840736169985").sendMessage(`@here **|**\n**${msg.author.tag} adlı kişi, #${msg.channel.name} kanalında operatorlerden yardım istiyor**`);
    msg.channel.send('Operatorlere bildirim gönderdim!');
  }
   if (msg.content.toLowerCase() === 'destek 5') {
	       if(!msg.guild) return
    client.members.get("309359939523182594").sendMessage(`${msg.author.tag} yardım istiyor!`);
  }
});

client.login(process.env.BOT_TOKEN);
