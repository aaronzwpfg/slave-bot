exports.init = function() {

const Discord = require('discord.js');
const colors = require('colors');

//requiring of local files
const credentials = require('./data/credentials.json');

//requiring helper functions
const h_cli = require('./helper/command_line.js');
const h_msg = require('./helper/messenger.js');

//defining global variables
const g_client = new Discord.Client();
const g_token = credentials.token;
const g_prefix = credentials.prefix;

//starting of the robot
g_client.on('ready', () => {

});

//when client receives a new message event
g_client.on('message', async message => {
	//check if message starts with  message.author is a bot
	if(message.content.indexOf(g_prefix) || message.author.bot) { return; }

	//get commands and args from message
	let content = message.content.slice(g_prefix.length);

	//let console know that there was a new command
	h_cli.out('command => ' + content.green);

	//call the new message received function
	h_msg.new(message, content);
});

//robot logs in with token and then prints to console
g_client.login(g_token).then(h_cli.out('bot logged in with token => ' + g_token.blue));



}

exports.version = function() {

const versionfile = require('./data/version.json');

return versionfile.version;

}

exports.files = function() {

const files = require('./data/fileIndex.json');

return files;

}