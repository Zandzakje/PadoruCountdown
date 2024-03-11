const cron = require("node-cron");
const messageConstructor = require("./MessageConstructor.js");
const botSettings = require("./BotSettings.js");
const index = require("../index.js");

cron.schedule("00 00 * * *", () => {
    var message = messageConstructor.CountdownMessage();
    index.client.channels.fetch("798937372657319969").then(channel => channel.send(message));
}, {
    scheduled: true,
    timezone: "Europe/Amsterdam"
});

cron.schedule("00,30 * * * *", () => {
    botSettings.ChangePresence(index.client);
}, {
    scheduled: true,
    timezone: "Europe/Amsterdam"
});