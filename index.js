// Adds necessary dependencies
const dotenv = require("dotenv").config(); // Initialises the secrets
const { Client, GatewayIntentBits } = require("discord.js"); // Discord Library

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, // Guild Related Things
    GatewayIntentBits.GuildMembers, // Guild Member Related Things
    GatewayIntentBits.GuildMessages, // See Guild Messages
    GatewayIntentBits.MessageContent, // See Message Content
    GatewayIntentBits.GuildVoiceStates, // See Voice States
  ],
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN)
  .then(() => {
    console.log("Bot has started successfully");
    console.log("Logged in as", client.user.username);
    client.user.setActivity(`with ${client.guilds.cache.size} guild(s)`);
  })
  .catch((err) => console.log(err));


// <-Command message handlers below->
// Example command message handler by responding to exact input

// client.on("messageCreate", (message) => { 
  
//   if(message.content.toLowerCase() === "!hi") {
//     message.channel.send("Hello!")
//     }

// });


// Example command message handler by using a delimiter

// client.on("messageCreate", (message) => {
//     if (message.author.bot || !message.guild) return;
//     const prefix = "?";
//     const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
//     if (args.shift().toLowerCase() === "ping") {
//       message.channel.send("Loading Data").then(async (msg) => {
//           msg.delete();
//           message.channel.send(
//               `Ping is ${msg.createdTimestamp - message.createdTimestamp}`
//           )
//       });
//     }
  
//   });

