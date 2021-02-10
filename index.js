const Discord = require("discord.js");
const config = require("./config.js");
const http = require("http");
const client = new Discord.Client();

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-type": "text/plain",
    });
    res.write("Hey");
    res.end();
  })
  .listen(4000);

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
    message.channel.send(`SAAAALVE, ${message.author}`);
  }
});

function speakDaily(message, hour = "13:58:00") {
  var day = new Date()
    .toString("pt-BR", { timeZone: "America/Sao_Paulo" })
    .split(" ")[0];

  if (["Mon", "Tue", "Wed", "Thu", "Fri"].includes(day)) {
    if (
      new Date()
        .toString("pt-BR", { timeZone: "America/Sao_Paulo" })
        .split(" ")[4]
        .slice(0, 2)
        .startsWith(hour.slice(0, 2))
    ) {
      var refreshIntervalId = setInterval(() => {
        if (
          new Date()
            .toString("pt-BR", { timeZone: "America/Sao_Paulo" })
            .split(" ")[4]
            .startsWith(hour)
        ) {
          message.channel.send("@here daily!");
          clearInterval(refreshIntervalId);
        }
      }, 1000);
    }
  }

  setTimeout(function () {
    speakDaily(message); //      Then, reset again next midnight.
  }, 3600000); //      Run every Hour after first call
}

client.login(config.BOT_TOKEN);
