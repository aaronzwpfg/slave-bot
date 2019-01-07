//requiring of local packages
const bot = require('./bot/bot.js');




const cluster = require('cluster');

if(cluster.isMaster) {



	const request = require('request');

	request.get('https://raw.githubusercontent.com/aaronzwpfg/node-js-versions/master/slave-bot/version.json', function (error, response, body) {
		if(!error && response.statusCode == 200) {
			const publicversion = JSON.parse(body).version;
			const currentversion = bot.version();
			console.log('BOT VERSION => ' + currentversion + ' published version => ' + publicversion);

			if(currentversion != publicversion) {

				const bot_files = bot.files();

			}
		} else {
			console.error('ERROR' + error);
		}
	});



	var worker = cluster.fork();
	console.log('worker started. PID => ' + worker.process.pid);

	cluster.on('disconnect', function(oldworker) {
		console.error('worker disconnected ' + oldworker.process.pid);
		worker = cluster.fork();
		console.log('new worker started. PID => ' + worker.process.pid);
	});

} else {

	//bot.init();

}