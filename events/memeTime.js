"use strict";

const fs = require("fs");
const {client, MessageAttachment} = require("../bot.js");
const utils = require("../utils.js");


module.exports = {
  name: "memeTime",
  description: "Posts a memes everyday at specified UTC time",
  
  execute() {
    let currentDate = new Date();
    //if (currentDate.getUTCHours() !== 8) return;
    
    //Get random meme
    let memeFiles = fs.readdirSync("./memes");
    let index = utils.randomInt(0, memeFiles.length);
    let randomMeme = `./memes/${memeFiles[index]}`;
    let memeAttachment = new MessageAttachment(fs.readFileSync(randomMeme));

    //Send meme
    utils.bulkSend("Hello @everyone! Here's today's meme of the day:", "memes");
    utils.bulkSend(memeAttachment, "memes");

    //Delete file
    //fs.unlinkSync(randomMeme);
  }
}