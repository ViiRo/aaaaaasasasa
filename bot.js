const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready',async () => {
 
joinVoiceChannel( client.channels.get("541283631176482837"), client.guilds.get("541250969409945620") );
 
function joinVoiceChannel(channel, guild) {
if(channel.type !== 'voice') return console.log(" # Error. - \"The channel type isn't a voice one\"");
channel.join().then(() => {
setInterval(() => {
if(client.user.voiceChannel.id !== guild.channels.get(channel)) {
channel.join();
}
}, 100);
}).catch(e => {
if(e) console.log(e);
});
}
});

client.login(process.env.BOT_TOKEN);