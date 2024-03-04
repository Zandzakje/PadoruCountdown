function randomActivity() {
    var random = Math.floor(Math.random() * 5);
    var activity;
    switch(random){
        case 0:
            activity = "Fate/GO";
            break;
        case 1:
            activity = "Honkai: Star Rail";
            break;
        case 2:
            activity = "osu!";
            break;
        case 3:
            activity = "Medieval Onslaught";
            break;
        case 4:
            activity = "Medieval Onslaught 2";
            break;
    }
    return activity;
}

function randomStatus() {
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
    randomActivity,
    randomStatus
}