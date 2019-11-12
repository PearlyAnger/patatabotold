const Discord = require("discord.js");

var bot = new Discord.Client();
bot.on("ready" , function(){
    bot.user.setActivity('patatabot.com', { type: 'WATCHING' });
    console.log("Le bot a bien ete connecte")
});
bot.on('message' , function(msg){
if (msg.content === '!patata'){
    msg.reply('10 le G *mamène*');
    }
});
bot.login(process.env.TOKEN);
