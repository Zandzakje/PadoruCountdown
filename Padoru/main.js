const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING]});
var cron = require('node-cron');

client.once('ready', () => {
    console.log('Umu!');
    client.user.setPresence({
      status: 'dnd', // online, idle, invisible, dnd
    });
    client.user.setActivity({
        name: 'Fate/GO',
        type: 'PLAYING'
    });
})

cron.schedule('00 00 09 * * *', function() {
    client.on('ready', () => {
        function getCountdownDate(){
            var data = new Array;
            var currentYear = new Date().getFullYear();
            var countdownDate = new Date("12/24/" + currentYear);
            data[0] = currentYear;
            data[1] = countdownDate;
            return data;
        }
        
        function getCurrentDate(){
            var data = new Array();
            var currentMonth = new Date().getMonth() + 1;
            var currentDay = new Date().getDate();
            var currentYear = new Date().getFullYear();
            var currentDate = new Date(currentMonth + "/" + currentDay + "/" + currentYear);
            data[0] = currentYear;
            data[1] = currentDate;
            return data;
        }
        
        function getDifferenceInDays(){
            var differenceInTime = getCountdownDate()[1].getTime() - getCurrentDate()[1].getTime();
            var differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
            return differenceInDays;
        }
        
        function updateCountdownDate(){
            var data = new Array();
            var nextYear = new Date().getFullYear() + 1;
            var updateCountdownDate = new Date("12/24/" + nextYear);
            data[0] = nextYear;
            data[1] = updateCountdownDate;
            return data;
        }
        
        function updateDifferenceInDays(){
            var differenceInTime = updateCountdownDate()[1].getTime() - getCurrentDate()[1].getTime();
            var differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
            return differenceInDays;
        }
        
        function checkPadoruReached(){
            var differenceInDays = getDifferenceInDays();
            var msg;
            if (differenceInDays == 1){
                msg = "Umu! " + differenceInDays + " day until padoru " + getCountdownDate()[0] + "!";
            }
            else if (differenceInDays == 0){
                msg = "Umu! Today it's padoru " + getCountdownDate()[0] + "! Happy padoru!";
            }
            else if (differenceInDays < 0){
                differenceInDays = updateDifferenceInDays();
                msg = "Umu! " + differenceInDays + " days until padoru " + updateCountdownDate()[0] + "!";
            }
            else {
                msg = "Umu! " + differenceInDays + " days until padoru " + getCountdownDate()[0] + "!";
            }
            
            return msg;
        }
    
        var msg = checkPadoruReached();
        client.channels.fetch('799257632619495435').then(channel => channel.send(msg));
    })
    
    client.login('ODg0Mzk3MTMzODAzOTc4Nzky.YTX5BA.sVv0T3e74wcBreWbQwB8v1NmBps');
    
    // start bot: node main.js
    // stop bot: ctrl + c
});