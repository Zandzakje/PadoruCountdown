const { DateTime } = require("luxon");

function GetDifferenceInDays() {
    var differenceInTime = GetCountdownDate().getTime() - GetCurrentDate().getTime();
    var differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
}

function UpdateDifferenceInDays() {
    var differenceInTime = UpdateCountdownDate().getTime() - GetCurrentDate().getTime();
    var differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
}

function GetCountdownDate() {
    var currentYear = GetCurrentYear();
    var countdownDate = new Date("12/24/" + currentYear);
    return countdownDate;
}

function UpdateCountdownDate() {
    var nextYear = GetNextYear();
    var updateCountdownDate = new Date("12/24/" + nextYear);
    return updateCountdownDate;
}

function GetCurrentDate() {
    var currentMonth = GetCurrentMonth();
    var currentDay = GetCurrentDay();
    var currentYear = GetCurrentYear();
    var currentDate = new Date(currentMonth + "/" + currentDay + "/" + currentYear);
    return currentDate;
}

function GetCurrentDateWithTimezone() {
    var dateTime = DateTime.local();
    var timezone = dateTime.setZone("Europe/Amsterdam").toString();
    var dateString = timezone.slice(0, -10) + "z";
    var currentDate = new Date(dateString);
    return currentDate;
}

function GetCurrentDay() {
    var currentDay = GetCurrentDateWithTimezone().getDate();
    return currentDay;
}

function GetCurrentMonth() {
    var currentMonth = GetCurrentDateWithTimezone().getMonth() + 1;
    return currentMonth;
}

function GetCurrentYear() {
    var currentYear = GetCurrentDateWithTimezone().getFullYear();
    return currentYear;
}

function GetNextYear() {
    var nextYear = GetCurrentDateWithTimezone().getFullYear() + 1;
    return nextYear;
}

module.exports = {
    GetDifferenceInDays,
    UpdateDifferenceInDays,
    GetCountdownDate,
    UpdateCountdownDate,
    GetCurrentDate,
    GetCurrentDateWithTimezone,
    GetCurrentDay,
    GetCurrentMonth,
    GetCurrentYear,
    GetNextYear
}
