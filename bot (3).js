const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "516614695495663616"; // ايدي السررفر
var channel = "516614695495663620";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر   **')
    },305);
})

client.login("NTE2NTY2ODQxMDI4NzcxODQx.Dt2PYA.R29HxY3FNgdGji61HVAEtq3mO3E");