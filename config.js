const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  BOT_TOKEN: process.env.TOKEN,
  prefix: "-ic ",
};
