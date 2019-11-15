const Discord = require("discord.js");

var patata;
var bot = new Discord.Client();
var name = ['Mathieu','Romain', 'Enzo'];

bot.on("ready" , function(){
    bot.user.setActivity('patatabot.com', { type: 'WATCHING' });
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
    if(patata === undefined){
        patata = rand(8,10);
        console.log(patata);
        msg.reply ('Le cours de la patata au G est redéfinie par Lolo à : ' + patata);

    }else{
        patata = patata + rand(1,2)/rand(1,2)+rand(-2,-1)/rand(2,1);
    }
    msg.reply (patata +' le G *mamène*');
}
});

bot.login(process.env.TOKEN);
