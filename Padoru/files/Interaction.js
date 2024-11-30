const mainMessage = require("./MainMessage.js");
const emoji = require("./Emoji.js");

function Command(command) {
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
        case "countdown":
            message = mainMessage.Countdown();
            break;
        case "gacha":
            message = Gacha();
            break;
        case "god":
            message = { files: [{ attachment: "./images/padoru.png" }] };
            break;
        case "help":
            message = "> Available commands:\n\
            > - **/blessing**  =>  get blessed by the padoru bot :D\n\
            > - **/countdown**  =>  shows a message with the days remaining until the next padoru\n\
            > - **/gacha**  =>  are you lucky enough to get the padoru?\n\
            > - **/god**  =>  shows a glimpse of perfection incarnate\n\
            > - **/help**  =>  shows a list of available commands\n\
            > - **/herta**  =>  just herta\n\
            > - **/march7th**  =>  march 7th chibi image\n\
            > - **/nero**  =>  nero happy sprite\n\
            > - **/padoru**  =>  shows the padoru lyrics";
            break;
        case "herta":
            message = { files: [{ attachment: "./images/Herta.jpg" }] };
            break;
        case "march7th":
            message = { files: [{ attachment: "./images/March7th.png" }] };
            break;
        case "nero":
            message = { files: [{ attachment: "./images/Nero.png" }] };
            break;
        case "padoru":
            message = "HASHIRE SORI YO\nKAZE NO YOU NI\nTSUKIMIHARA WO\nPADORU PADORU";
            break;
        default:
            message = "error";
            break;
    }
    return message;
}

function Gacha(){
    var random = Math.floor(Math.random() * 200);
    var gachaResult;
    switch(random){
        case 0:
            gachaResult = "Your result:\n" + emoji.serverEmojis[0];
            break;
        default:
            gachaResult = "Your result:\n" + emoji.serverEmojis[1];
            break;
    }
    return gachaResult;
}

module.exports = {
    Command,
    Gacha
}