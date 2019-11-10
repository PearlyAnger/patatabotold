const Discord = require("discord.js");

var bot = new Discord.Client();
bot.on("ready" , function(){
    bot.user.setGame("patatabot.com");
    console.log("Le bot a bien ete connecte")
});

 bot.login(process.env.TOKEN);
