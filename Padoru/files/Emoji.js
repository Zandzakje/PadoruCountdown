const dateCalculations = require("./DateCalculations.js");

const defaultEmojis = [
    "\uD83C\uDF37", // tulip
    "\u2600\uFE0F", // sunny
    "\uD83C\uDF42", // fallen leaf
    "\u2744\uFE0F", // snowflake
    "\uD83C\uDF86", // fireworks
    "\uD83C\uDF89", // tada
    "\uD83E\uDD9D", // raccoon
    "\u2705",       // check mark
    "\u274E",       // cross mark
    "\u2B50",       // star
    "\u2728",       // sparkles
    "\u2694\uFE0F"  // crossed swords
];

const serverEmojis = [
    "<:Item_Stellar_Jade:1207637483525902346>",
    "<:padorunobg:1179725588500582432>",
    "<:harpyface:1157629813654310932> "
];

function SeasonEmoji() {
    var seasonEmoji;
    var currentMonth = dateCalculations.GetCurrentMonth();
    switch(currentMonth) {
        case 12:
        case 1:
        case 2:
            seasonEmoji = defaultEmojis[3];
            break;
        case 3:
        case 4:
        case 5:
            seasonEmoji = defaultEmojis[0];
            break;
        case 6:
        case 7:
        case 8:
            seasonEmoji = defaultEmojis[1];
            break;
        case 9:
        case 10:
        case 11:
            seasonEmoji = defaultEmojis[2];
            break;
    }
    return seasonEmoji;
}

function RandomServerEmoji() {
    var random = Math.floor(Math.random() * 3);
    var emoji;
    switch(random) {
        case 0:
            emoji = serverEmojis[0];
            break;
        case 1:
            emoji = serverEmojis[1];
            break;
        case 2:
            emoji = serverEmojis[2];
            break;
    }
    return emoji;
}

module.exports = {
    defaultEmojis,
    serverEmojis,
    SeasonEmoji,
    RandomServerEmoji
}