const botSettings = require("./BotSettings.js");
const dateCalculations = require("./DateCalculations.js");
const emoji = require("./Emoji.js");

function CountdownMessage() {
    var message;
    var differenceInDays = dateCalculations.GetDifferenceInDays();
    if(differenceInDays == 1){
        message = emoji.SeasonEmoji() + " umu! **" + differenceInDays + "** day until padoru " + dateCalculations.GetCurrentYear() + "! " + emoji.SeasonEmoji();
    } else if(differenceInDays === 0){
        message = emoji.SeasonEmoji() + " umu! **Today** it's padoru " + dateCalculations.GetCurrentYear() + "! Happy padoru! " + emoji.serverEmojis[1] + emoji.SeasonEmoji();
    } else if(differenceInDays < 0){
        differenceInDays = dateCalculations.UpdateDifferenceInDays();
        message = emoji.SeasonEmoji() + " umu! **" + differenceInDays + "** days until padoru " + dateCalculations.GetNextYear() + "! " + emoji.SeasonEmoji();
    } else {
        message = emoji.SeasonEmoji() + " umu! **" + differenceInDays + "** days until padoru " + dateCalculations.GetCurrentYear() + "! " + emoji.SeasonEmoji();
    }

    var specialDayMessage = SpecialDayMessage();
    if(specialDayMessage != "") {
        message = message + "\n\nSpecial mentions:\n" + specialDayMessage;
    }
    return message;
}

function SpecialDayMessage(){
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
        case "12/15":
            message = "- Happy birthday Nero Claudius! " + emoji.defaultEmojis[5];
            break;
        default:
            message = RareMessage();
            break;
    }
    return message;
}

function RareMessage(){
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

function CommandMessage(command) {
    var message;
    switch(command) {
        case "blessing":
            message = emoji.defaultEmojis[10] + " umu! You are now blessed with increased chance for "  + emoji.defaultEmojis[9]
                                                                                                        + emoji.defaultEmojis[9]
                                                                                                        + emoji.defaultEmojis[9]
                                                                                                        + emoji.defaultEmojis[9]
                                                                                                        + emoji.defaultEmojis[9]
                                                                                                        + "'s " + emoji.serverEmojis[1] + " "
                                                                                                        + emoji.defaultEmojis[10];
            break;
        case "commands":
            message = "> Available commands:\n\
            > - **!blessing**  =>  get blessed by the padoru bot before doing gacha rolls\n\
            > - **!commands**  =>  list of available commands\n\
            > - **!countdown**  =>  countdown message\n\
            > - **!padoru**  =>  padoru lyrics\n\
            > - **!padoru-img**  =>  padoru image\n\
            > - **!nero**  =>  nero happy image\n\
            > - **^emoji**  =>  random emoji from this server\n\
            > - **^emoji0...2**  =>  specific emoji from this server\n\
            > - **?switch**  =>  padoru bot's game and status are randomized";
            break;
        case "countdown":
            message = CountdownMessage();
            break;
        case "padoru":
            message = "HASHIRE SORI YO\nKAZE NO YOU NI\nTSUKIMIHARA WO\nPADORU PADORU";
            break;
        case "padoru-img":
            message = { files: [{ attachment: "./images/padoru.png" }] };
            break;
        case "nero":
            message = { files: [{ attachment: "./images/nero_happy.jpg" }] };
            break;
        default:
            message = "error";
            break;
    }
    return message;
}

function SeperateMessageFromPrefix(string, number){
    const args = string.slice(botSettings.prefixes[number].length).trim().split(/ +/);
    const message = args.shift().toLowerCase();
    return message;
}

module.exports = {
    CountdownMessage,
    SpecialDayMessage,
    RareMessage,
    CommandMessage,
    SeperateMessageFromPrefix
}