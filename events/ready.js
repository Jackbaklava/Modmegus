"use strict";

const {client} = require("../bot.js");


module.exports = {
  name: "ready",
  description: "Executes once client is ready",
  once: true,
  
  execute() {
    console.log(`${client.user.tag} is running!`);
  }
}