exports.new = async function(message, content) {

	var channel = message.channel;

	var response = await message.channel.send('...'); 

	//define command and arguments from content
	var command = content.split(' ', 1)[0];
	var args = content.split(' ').slice(1);

	//separate commands by channel type
	if(channel.type == 'dm') {

	} else {

	}

	const clean = text => {
  	if (typeof(text) === "string")
    	return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  	else
      	return text;
	}

	//global channel commands
	if(command == 'js') {
		try {

			const code = args.join(' ');
			let evaled = eval(code);

			if(typeof evaled !== 'string') {
				evaled = require('util').inspect(evaled);
			}

			response.edit(`\`CODE\` \`\`\`xl\n${clean(code)}\n\`\`\`` + `\n\`RESULT\` \`\`\`xl\n${clean(evaled)}\n\`\`\``);
		} catch (e) {
			response.edit(`\`ERROR\` \`\`\`xl\n${clean(e)}\n\`\`\``);
		}


	} else if(command == 'restart') {
		response.edit('restarting');
		setTimeout(function() {
			process.exit(1);
		}, 2000);
	} 

}
