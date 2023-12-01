function getDifferenceInDays() {
    var differenceInTime = getCountdownDate().getTime() - getCurrentDate().getTime();
    var differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
}

function updateDifferenceInDays() {
    var differenceInTime = updateCountdownDate().getTime() - getCurrentDate().getTime();
    var differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
}

function getCountdownDate() {
    var currentYear = getCurrentYear();
    var countdownDate = new Date("12/24/" + currentYear);
    return countdownDate;
}

function updateCountdownDate() {
    var nextYear = getNextYear();
    var updateCountdownDate = new Date("12/24/" + nextYear);
    return updateCountdownDate;
}

function getCurrentDate() {
    var currentMonth = getCurrentMonth();
    var currentDay = getCurrentDay();
    var currentYear = getCurrentYear();
    var currentDate = new Date(currentMonth + "/" + currentDay + "/" + currentYear);
    return currentDate;
}

function getCurrentDay() {
    var currentDay = new Date().getDate();
    return currentDay;
}

function getCurrentMonth() {
    var currentMonth = new Date().getMonth() + 1;
    return currentMonth;
}

function getCurrentYear() {
    var currentYear = new Date().getFullYear();
    return currentYear;
}

function getNextYear() {
    var nextYear = new Date().getFullYear() + 1;
    return nextYear;
}

module.exports = {
    getDifferenceInDays,
    updateDifferenceInDays,
    getCountdownDate,
    updateCountdownDate,
    getCurrentDate,
    getCurrentDay,
    getCurrentMonth,
    getCurrentYear,
    getNextYear
}
