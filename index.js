const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// ================= START BOT CODE ===================
const Discord = require("discord.js");
const config = require("./config.js");
const client = new Discord.Client();
const speakDaily = require("./utils/speakDaily");
const randomGreeting = require("./utils/randomGreeting");

client.on("ready", () => {
  console.log("The bot is ready");
});

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  const commandBody = message.content.slice(config.prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "programar-daily") {
    message.reply(`Ok, ${args[0] || "13:58:00"} eu aviso da daily!`);
    speakDaily(message, args[0]);
  } else if (command === "salve") {
    randomGreeting(message);
  } else if (command === "roi") {
    message.channel.send(`Rooi, Letícia né?`);
  } else if (command === "ei bunda mole") {
    message.channel.send(`Falou comigo?`);
  }
});

client.login(config.BOT_TOKEN);
