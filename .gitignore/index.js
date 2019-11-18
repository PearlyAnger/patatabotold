const Discord = require("discord.js");
const btc = require("btc-value");

var patata;
var bot = new Discord.Client();
var name = ['Mathieu','Romain', 'Enzo'];

bot.on("ready" , function(){
    bot.user.setActivity('patatabot.com', { type: 'WATCHING' });
    console.log("Le bot a bien ete connecte")
    console.log('bot on');
});

function rand(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}


bot.on('message' , function(msg){
    if (msg.content === '!random'){
        msg.reply(name[rand(0,2)]);

    }
});


bot.on('message' , function(msg){
	
	if (msg.content === '!patata'){
		btc().then(value => {msg.reply ( 0.001*value +' le G *mamène*');});
    }
});

bot.login(process.env.TOKEN);
