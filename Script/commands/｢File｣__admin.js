const axios = require("axios");

const request = require("request");

const fs = require("fs-extra");

const moment = require("moment-timezone");


module.exports.config = {

    name: "admin",

    version: "1.0.0",

    hasPermssion: 0,

    credits: "ullash",

    description: "Show Owner Info",

    commandCategory: "info",

    usages: "admin info",

    cooldowns: 5

};


module.exports.run = async function({ api, event }) {

    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");


    var callback = () => api.sendMessage({

        body: `

┏━━━━━━━━━━━━━━━━━━━━━┓

┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      

┣━━━━━━━━━━━━━━━━━━━━━┫

┃ 👤 𝐍𝐚𝐦𝐞      :  Md Bhai

┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞

┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : Single pro max😁

┃ 🎂 𝐀𝐠𝐞       : 23

┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦

┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐉𝐎𝐁

┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : Kolkata , India

┣━━━━━━━━━━━━━━━━━━━━━┫

┃ 🎭 𝐓𝐢𝐤𝐭𝐨𝐤  : Md Bhai

┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : [𝐉𝐨𝐢𝐧 𝐍𝐨𝐰](018131538)

┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : [𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞](https://www.facebook.com/profile.php?id=61575267073525)

┣━━━━━━━━━━━━━━━━━━━━━┫

┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞: ${time}

┗━━━━━━━━━━━━━━━━━━━━━┛

        `,

        attachment: fs.createReadStream(__dirname + "/cache/1.png")

    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));

  

    return request(encodeURI(`https://www.facebook.com/sujonxn123?mibextid=ZbWKwL/picture?height=720&width=720&access_token=61575267073525%7Cc1e620fa708a1d5696fb991c1bde5662`))

        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))

        .on('close', () => callback());

};
