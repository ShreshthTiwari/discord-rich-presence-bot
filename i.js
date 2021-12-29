const RPC = require('discord-rpc')
const client = new RPC.Client({ transport: 'ipc' });
const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config.js')
const clientId = config.CLIENT_ID
client.on('ready', () => {

    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: config.UPPER_TEXT,
            state: config.LOWER_TEXT,
            assets: {
                large_image: config.LARGE_IMAGE_NAME,
                large_text: config.LARGE_IMAGE_TEXT
            },
            buttons: [
                { label: config.BUTTON_1_TEXT, url: config.BUTTON_1_URL },
                { label: config.BUTTON_2_TEXT, url: config.BUTTON_2_URL }
            ]
        }
    })
    console.log('RPC has started!')
    console.log(`\x1b[37m`)
    console.log(`\x1b[32m==========================================`)
    console.log(`\x1b[33m   ClientID: ${config.CLIENT_ID}`)
    console.log(`\x1b[32m==========================================`)
    console.log(`\x1b[32m   Upper Text: ${config.UPPER_TEXT} Lower Text: ${config.LOWER_TEXT}`)
    console.log(`\x1b[32m   Button 1: Text: ${config.BUTTON_1_TEXT} URL: ${config.BUTTON_1_URL}`)
    console.log(`\x1b[32m   Button 2: Text: ${config.BUTTON_2_TEXT} URL: ${config.BUTTON_2_URL}`)
    console.log(`\x1b[32m==========================================`)
    console.log(`\x1b[37m`)
})
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`)
})

client.login({ clientId });
bot.login(config.TOKEN)