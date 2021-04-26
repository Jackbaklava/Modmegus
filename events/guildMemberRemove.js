"use strict";

const utils = require("../utils.js");


module.exports = {
  name: "guildMemberRemove",
  description: "Executes whenever a member leaves the server",
  
  execute(member) {
    const farewellString = `For some reason, ${member} vanished from the server :(`;
    
    utils.getChannel("welcome").send(farewellString);
  }
}