function randomActivity() {
    var random = Math.floor(Math.random() * 20);
    var activity;
    switch(random) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            activity = 'Fate/GO';
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            activity = 'Honkai: Star Rail';
            break;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
            activity = 'osu!';
            break;
        case 15:
        case 16:
        case 17:
        case 18:
            activity = 'Medieval Onslaught';
            break;
        case 19:
            activity = 'Medieval Onslaught 2';
            break;
    }
}

function randomStatus() {
    var random = Math.floor(Math.random() * 3);
    var status;
}