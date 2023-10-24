const {ask} = require("./ai.js");
const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();


const client = new Client({ 
    intents:[
        GatewayIntentBits.Guilds,  // guild
        GatewayIntentBits.GuildMembers, // guild member 
        GatewayIntentBits.GuildMessages, // guild messages
       GatewayIntentBits.MessageContent,
       GatewayIntentBits.DirectMessages,
       GatewayIntentBits.DirectMessageReactions,
    ] });

client.on("ready",()=>{
    console.log("AI bot is Online");
})

client.on(Events.MessageCreate, async message => {
    if(message.author.bot) return;
    if (message.content.substring(0, 1) === "!") {
      const prompt = message.content.substring(1); //remove the exclamation mark from the message
      const answer = await ask(prompt); //prompt GPT-3
    //   message.reply(answer);
      client.channels.fetch(message.channelId).then(channel => channel.send(answer));
    }
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);

    if (interaction.isCommand && interaction.commandName === 'about') {
        interaction.reply("Himanshu Joshi is very Good, Handsome, Genius Boy");
    }else if (interaction.isCommand && interaction.commandName === 'twitter') {
        interaction.reply("Here is the Twitter Handle of MR. Joshi! -> https://twitter.com/himanshuJ144");
    } else if (interaction.isCommand && interaction.commandName === 'linkedin') {
        interaction.reply("Here is the Linkedin Handle of Sir Himanshu! -> https://www.linkedin.com/in/himanshujoshi011/");
    }else if (interaction.isCommand && interaction.commandName === 'github') {
        interaction.reply("Here is the Github Handle of Sir Himanshu! -> https://github.com/HimanshuJ011");
    }else  {
        interaction.reply("Haha Boiiiiiiii!!");
    }
});
client.login(
    process.env['TOKEN']
);
console.log(process.env['TOKEN']);
