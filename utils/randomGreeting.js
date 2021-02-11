module.exports = function randomGreeting(message) {
  const greetings = [
    `SAAAALVE, ${message.author}`,
    `Ooooooopa, meu bom`,
    `Bom dia, major`,
    `Opa, meu caro ${message.author}`,
    `Belo dia pra tu quebrar as coisas em PRD, ${message.author}`,
  ];

  let index = Math.floor(Math.random() * greetings.length) + 1;

  message.channel.send(greetings[index]);
};
