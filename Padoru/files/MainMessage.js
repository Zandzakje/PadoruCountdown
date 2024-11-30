const dateCalculations = require("./DateCalculations.js");
const emoji = require("./Emoji.js");
const additionalMessage = require("./AdditionalMessage.js");

function Countdown() {
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

    var specialDay = additionalMessage.SpecialDay();
    if(specialDay != "") {
        message = message + "\n\nSpecial mentions:\n" + specialDay;
    }
    return message;
}

module.exports = {
    Countdown
}