module.exports = function speakDaily(message, hour = "13:58:00") {
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
};
