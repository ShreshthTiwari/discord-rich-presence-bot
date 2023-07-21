const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: "ipc" });
const config = require("./config.json");

DiscordRPC.register(config.CLIENT_ID);

async function setActivity() {
  if (!RPC) return;

  RPC.setActivity({
    details: config.FIRST_LINE,
    state: config.SECOND_LINE,
    startTimestamp: Date.now(),
    largeImageKey: config.IMAGE_NAME,
    largeImageText: config.IMAGE_TEXT,
    smallImageKey: config.IMAGE_NAME,
    smallImageText: config.IMAGE_TEXT,
    instance: false,
    buttons: [
      {
        label: config.BUTTON_1_TEXT,
        url: config.BUTTON_1_URL,
      },
      {
        label: config.BUTTON_2_TEXT,
        url: config.BUTTON_2_URL,
      },
    ],
  });
}

RPC.on("ready", async () => {
  setActivity();

  setInterval(() => {
    setActivity();
  }, 15 * 1000);
});

RPC.login({ clientId: config.CLIENT_ID }).catch(error => console.error(error));