const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });
const config = require('./config.js');
const clientId = config.CLIENT_ID;

client.on('error', async (error) => {
  console.log(error);
})

client.on('ready', async () => {
  await client.request('SET_ACTIVITY', {
    pid: process.pid,
    activity: {
      details: config.FIRST_LINE,
      state: config.SECOND_LINE,
      assets: {
        large_image: config.IMAGE_NAME,
        large_text: config.IMAGE_TEXT
      },
      buttons: [
        { label: config.BUTTON_1_TEXT, url: config.BUTTON_1_URL },
        { label: config.BUTTON_2_TEXT, url: config.BUTTON_2_URL }
      ]
    }
  }).catch(error => {
    console.log(error);
  });
  console.log('RPC has started!')
  console.log(`\x1b[37m`)
  console.log(`\x1b[32m==========================================`);
  console.log(`\x1b[33m   ClientID: ${config.CLIENT_ID}`);
  console.log(`\x1b[32m==========================================`);
  console.log(`\x1b[32m   Upper Text: ${config.UPPER_TEXT} Lower Text: ${config.LOWER_TEXT}`);
  console.log(`\x1b[32m   Button 1: Text: ${config.BUTTON_1_TEXT} URL: ${config.BUTTON_1_URL}`);
  console.log(`\x1b[32m   Button 2: Text: ${config.BUTTON_2_TEXT} URL: ${config.BUTTON_2_URL}`);
  console.log(`\x1b[32m==========================================`);
  console.log(`\x1b[37m`);
});

client.login({ clientId });