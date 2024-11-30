const dateCalculations = require("./DateCalculations.js");
const emoji = require("./Emoji.js");

function SpecialDay(){
    var message;
    var currentMonth = dateCalculations.GetCurrentMonth();
    var currentDay = dateCalculations.GetCurrentDay();
    var currentMonthDay = currentMonth + "/" + currentDay;
    switch(currentMonthDay) {
        case "1/1":
            message = "- Happy new year! " + emoji.defaultEmojis[4];
            break;
        case "2/21":
            message = "- Happy birthday Hitori Gotoh (Bocchi)! " + emoji.defaultEmojis[5];
            break;
        case "3/7":
            message = "- Happy birthday March 7th! " + emoji.defaultEmojis[5];
            break;
        case "4/26":
            message = "- Happy birthday Stelle/Caelus! " + emoji.defaultEmojis[6] + emoji.defaultEmojis[5];
            break;
        case "10/20":
            message = "- Happy Shirou day! " + emoji.defaultEmojis[11];
            break;
        case "12/15":
            message = "- Happy birthday Nero Claudius! " + emoji.defaultEmojis[5];
            break;
        default:
            message = Rare();
            break;
    }
    return message;
}

function Rare(){
    var random = Math.floor(Math.random() * 100);
    var rareMessage;
    switch(random){
        case 0:
            rareMessage = "- " + emoji.serverEmojis[0];
            break;
        case 1:
            rareMessage = "- " + emoji.serverEmojis[1];
            break;
        case 2:
            rareMessage = "- " + emoji.serverEmojis[2];
            break;
        case 97:
            rareMessage = "- An umu a day keeps the sadness away " + emoji.serverEmojis[1];
            break;
        case 98:
            rareMessage = "- (≧▽≦)♡"
            break;
        case 99:
            rareMessage = "- ᗜˬᗜ"
            break;
        default:
            rareMessage = "";
            break;
    }
    return rareMessage;
}

module.exports = {
    SpecialDay,
    Rare
}