function checkPadoruReached() {
    var msg;
    var differenceInDays = getDifferenceInDays();
    // if (differenceInDays == 1){
    //     msg = "Umu! " + differenceInDays + " day until padoru " + getCountdownDate()[0] + "!";
    // }
    // else if (differenceInDays == 0){
    //     msg = "Umu! Today it's padoru " + getCountdownDate()[0] + "! Happy padoru!";
    // }
    // else if (differenceInDays < 0){
    //     differenceInDays = updateDifferenceInDays();
    //     msg = "Umu! " + differenceInDays + " days until padoru " + updateCountdownDate()[0] + "!";
    // }
    // else {
    //     msg = "Umu! " + differenceInDays + " days until padoru " + getCountdownDate()[0] + "!";
    // }
    switch(differenceInDays) {
        case 1:
            msg = ":christmas_tree: umu! **" + differenceInDays + "** day until padoru " + getCountdownDate()[0] + "! :christmas_tree:";
            break;
        case 0:
            msg = ":christmas_tree: umu! **Today** it's padoru " + getCountdownDate()[0] + "! Happy padoru! :christmas_tree:";
            break;
        case -1:
            differenceInDays = updateDifferenceInDays();
            msg = ":christmas_tree: umu! **" + differenceInDays + "** days until padoru " + updateCountdownDate()[0] + "! :christmas_tree:";
            break;
        default:
            msg = ":christmas_tree: umu! **" + differenceInDays + "** days until padoru " + getCountdownDate()[0] + "! :christmas_tree:";
            break;
    }
    return msg;
}

function getDifferenceInDays() {
    var differenceInTime = getCountdownDate()[1].getTime() - getCurrentDate()[1].getTime();
    var differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
}

function getCountdownDate() {
    var data = new Array;
    var currentYear = new Date().getFullYear();
    var countdownDate = new Date("12/24/" + currentYear);
    data[0] = currentYear;
    data[1] = countdownDate;
    return data;
}

function getCurrentDate() {
    var data = new Array();
    var currentMonth = new Date().getMonth() + 1;
    var currentDay = new Date().getDate();
    var currentYear = new Date().getFullYear();
    var currentDate = new Date(currentMonth + "/" + currentDay + "/" + currentYear);
    data[0] = currentYear;
    data[1] = currentDate;
    return data;
}

function updateDifferenceInDays() {
    var differenceInTime = updateCountdownDate()[1].getTime() - getCurrentDate()[1].getTime();
    var differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
}

function updateCountdownDate() {
    var data = new Array();
    var nextYear = new Date().getFullYear() + 1;
    var updateCountdownDate = new Date("12/24/" + nextYear);
    data[0] = nextYear;
    data[1] = updateCountdownDate;
    return data;
}

// not working, needs fix!!!!!!!!!!!!
function messageSpecialDays() {
    var newMsg;
    // ------
    var currentMonth = new Date().getMonth();
    var currentDay = new Date().getDate();
    var currentMonthDay = new Date(currentMonth + "/" + currentDay);
    console.log("current date: " + currentMonthDay);
    // ------
    switch(currentMonthDay) {
        case '11/30':
            newMsg = ":fireworks: Happy new year! <:padorunobg:1179725588500582432> :fireworks:\n:christmas_tree: Also, umu! **" + differenceInDays + "** days until padoru " + getCountdownDate()[0] + "! :christmas_tree:";
            break;
        default:
            newMsg = "";
            break;
    }
    return newMsg;
}

module.exports = {
    checkPadoruReached,
    getDifferenceInDays,
    getCountdownDate,
    getCurrentDate,
    updateDifferenceInDays,
    updateCountdownDate,
    messageSpecialDays
}
