const moment = require("moment-timezone")
const axios = require("axios")

/**
 * @type {Promise}
 */

let docs = axios({
    method:"get",
    url:"https://www.growtopiagame.com/detail"
}).then(res => {
    let data = res.data
    let online = data.online_user
    let wotdimg = data.world_day_images.full_size
    let wotdname = wotdimg.split('/')[4].split(".")[0]
    let x = moment(Date.now()).tz("America/New_York") // options time
    let time = x.format('LTS')
    let date = x.format("ll")
    let alltime = x.format("lll")
    return new Promise((resolve,reject) => {
        resolve(
            {
                "online_users":online,
                "wotd":{
                    "name":wotdname,
                    "image":wotdimg
                },
                "time":{
                    "full_time":alltime,
                    "date":date,
                    "time":time
                }
            }
        )
        reject("Need help with grownpm npm package ?? join our discord server: https://discord.gg/8rUvTYhFqK")
    })
}).catch(err => {
    console.log("Need help with grownpm npm package ?? join our discord server: https://discord.gg/8rUvTYhFqK");
})

module.exports = docs
