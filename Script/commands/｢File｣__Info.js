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

┃ 👤 𝐍𝐚𝐦𝐞      : 𝗠𝗗 𝗕𝗛𝗔𝗜

┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝗠𝗔𝗟𝗘

┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝗦𝗜𝗡𝗚𝗟𝗘 𝗣𝗥𝗢 𝗠𝗔𝗫

┃ 🎂 𝐀𝐠𝐞       : 23

┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝗜𝗦𝗟𝗔𝗠

┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝗝𝗢𝗕

┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝗞𝗢𝗟𝗞𝗔𝗧𝗔 , 𝗜𝗡𝗗𝗜𝗔

┣━━━━━━━━━━━━━━━━━━━━━┫

┃ 🎭 𝐓𝐢𝐤𝐭𝐨𝐤  : 𝗠𝗗 𝗕𝗛𝗔𝗜

┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : [𝐉𝐨𝐢𝐧 𝐍𝐨𝐰](018131538)

┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : [𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞](https://www.facebook.com/profile.php?id=61575267073525)

┣━━━━━━━━━━━━━━━━━━━━━┫

┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞: ${time}

┗━━━━━━━━━━━━━━━━━━━━━┛

        `,

        attachment: fs.createReadStream(__dirname + "/cache/1.png")

    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));

  

    return request(encodeURI(https://www.facebook.com/profile.php?id=61575267073525/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))

        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))

        .on('close', () => callback());

};
