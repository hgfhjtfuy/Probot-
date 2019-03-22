const Discord = require('discord.js'); //Z Bot

const Util = require('discord.js');

const request = require("request")

const GOOGLE_API_KEY = "AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8" //Z

const getYoutubeID = require('get-youtube-id');

const Canvas = require("canvas");

const mmss = require("ms");

const queue = [];

const jimp = require("jimp");

const convert = require("hh-mm-ss");

const dateFormat = require('dateformat');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4"; 

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const moment = require('moment');

const client = new Discord.Client({disableEveryone: true});

const prefix = "#";



client.on('message',async message => {
var emojis   = { arrow: `${client.guilds.find(r => r.id === '532624137894625311').emojis.find(e => e.name === 'login')}` };

       if (message.content.startsWith(prefix + "help")) {
        
       message.channel.send(`** • قـــائمة الاومر ** :
        ${emojis.arrow}, **| ${prefix}help-member ⇏ 
        ${emojis.arrow},  | ${prefix}help-admin ⇏ 
        ${emojis.arrow},  | ${prefix}help-staff⇏ 

**`)


   }

});



 
  

client.login(process.env.BOT_TOKEN);
