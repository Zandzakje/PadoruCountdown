const { ActivityType } = require("discord.js");

function ChangePresence(client) {
    client.user.setPresence({
        activities: [{
            name: RandomActivity(),
            type: ActivityType.Playing
        }],
        status: RandomStatus() 
    });
    return;
}

function RandomActivity() {
    var random = Math.floor(Math.random() * 6);
    var activity;
    switch(random){
        case 0:
            activity = "Medieval Onslaught";
            break;
        case 1:
            activity = "Medieval Onslaught 2";
            break;
        case 2:
            activity = "Fate/GO";
            break;
        case 3:
            activity = "Fate/EXTRA CCC";
            break;
        case 4:
            activity = "Honkai: Star Rail";
            break;
        case 5:
            activity = "osu!";
            break;
    }
    return activity;
}

function RandomStatus() {
    var random = Math.floor(Math.random() * 3);
    var status;
    switch(random){
        case 0:
            status = "online";
            break;
        case 1:
            status = "idle";
            break;
        case 2:
            status = "dnd";
            break;
        // case 3:
        //     status = "invisible";
        //     break;
    }
    return status;
}

module.exports = {
    ChangePresence,
    RandomActivity,
    RandomStatus
}