const dateCalculations = require('./DateCalculations.js');

function generateCountdownMessage() {
    var message;
    var differenceInDays = dateCalculations.getDifferenceInDays();
    switch(differenceInDays) {
        case 1:
            message = seasonEmoji() + " umu! **" + differenceInDays + "** day until padoru " + dateCalculations.getCurrentYear() + "! " + seasonEmoji();
            break;
        case 0:
            message = seasonEmoji() + " umu! **Today** it's padoru " + dateCalculations.getCurrentYear() + "! Happy padoru! <:padorunobg:1179725588500582432> " + seasonEmoji();
            break;
        case -1:
            differenceInDays = dateCalculations.updateDifferenceInDays();
            message = seasonEmoji() + " umu! **" + differenceInDays + "** days until padoru " + dateCalculations.getNextYear() + "! " + seasonEmoji();
            break;
        default:
            message = seasonEmoji() + " umu! **" + differenceInDays + "** days until padoru " + dateCalculations.getCurrentYear() + "! " + seasonEmoji();
            break;
    }

    if(specialDays() != "") {
        message = message + "\n " + specialDays();
    }

    return message;
}

function specialDays() {
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

module.exports = {
    generateCountdownMessage,
    specialDays,
    seasonEmoji
}