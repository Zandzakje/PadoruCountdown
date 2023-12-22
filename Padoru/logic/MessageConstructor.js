const dateCalculations = require('./DateCalculations.js');

function countdownMessage() {
    var message;
    var differenceInDays = dateCalculations.getDifferenceInDays();
    if(differenceInDays == 1){
        message = seasonEmoji() + " umu! **" + differenceInDays + "** day until padoru " + dateCalculations.getCurrentYear() + "! " + seasonEmoji();
    } else if(differenceInDays === 0){
        message = seasonEmoji() + " umu! **Today** it's padoru " + dateCalculations.getCurrentYear() + "! Happy padoru! <:padorunobg:1179725588500582432> " + seasonEmoji();
    } else if(differenceInDays < 0){
        differenceInDays = dateCalculations.updateDifferenceInDays();
        message = seasonEmoji() + " umu! **" + differenceInDays + "** days until padoru " + dateCalculations.getNextYear() + "! " + seasonEmoji();
    } else {
        message = seasonEmoji() + " umu! **" + differenceInDays + "** days until padoru " + dateCalculations.getCurrentYear() + "! " + seasonEmoji();
    }

    if(specialDayMessage() != "") {
        message = message + "\n " + specialDayMessage();
    }
    return message;
}

function specialDayMessage() {
    var message;
    var currentMonth = dateCalculations.getCurrentMonth();
    var currentDay = dateCalculations.getCurrentDay();
    var currentMonthDay = currentMonth + "/" + currentDay;
    switch(currentMonthDay) {
        case "1/1":
            message = ":fireworks: Happy new year! :fireworks:";
            break;
        default:
            message = "";
            break;
    }
    return message;
}

function commandMessage(command) {
    var message;
    switch(command) {
        case 'padoru':
            message = 'HASHIRE SORI YO\nKAZE NO YOU NI\nTSUKIMIHARA WO\nPADORU PADORU';
            break;
        case 'countdown':
            message = countdownMessage();
            break;
        case 'emote':
            message = serverEmoji();
            break;
        case 'padoru-img':
            message = { files: [{ attachment: './images/padoru.png' }] };
            break;
        case 'nero':
            message = { files: [{ attachment: './images/nero_happy.jpg' }] };
            break;
        default:
            message = '<:padorunobg:1179725588500582432> umu! invalid command! <:padorunobg:1179725588500582432>';
            break;
    }
    return message;
}

function seasonEmoji() {
    var seasonEmoji;
    var currentMonth = dateCalculations.getCurrentMonth();
    switch(currentMonth) {
        case 12:
        case 1:
        case 2:
            seasonEmoji = ":snowflake:";
            break;
        case 3:
        case 4:
        case 5:
            seasonEmoji = ":tulip:";
            break;
        case 6:
        case 7:
        case 8:
            seasonEmoji = ":sunny:";
            break;
        case 9:
        case 10:
        case 11:
            seasonEmoji = ":fallen_leaf:";
            break;
    }
    return seasonEmoji;
}

function serverEmoji() {
    var random = Math.floor(Math.random() * 3);
    var emoji;
    switch(input) {
        case 0:
            emoji = '<:harpyface:1157629813654310932> ';
            break;
        case 1:
            emoji = '<:padorunobg:1179725588500582432>';
            break;
        case 2:
            emoji = '<:HitoriGotoh:1179725551192256523>';
            break;
    }
    return emoji;
}

module.exports = {
    countdownMessage,
    specialDayMessage,
    commandMessage,
    seasonEmoji,
    serverEmoji
}