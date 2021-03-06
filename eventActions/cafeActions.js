const config = require('../config.json');
const afkAction = require('./afkMessageCheckAction');

class cafeActions {
	static async greetMorningOrNight(client, message) {
		// Handle good morning and goodnight
		if (
			message.content.toLowerCase().indexOf("good") != -1 &&
			message.content.toLowerCase().indexOf("night") != -1 &&
			message.content.toLowerCase().indexOf("bookery") != -1
		) {
			client.commands
				.get("afk")
				.execute(client, message, ["Went to sleep.", "auto"]);
			return await message.react(config.emotes.goodnight);
		} else if (
			message.content.toLowerCase().indexOf("good") != -1 &&
			message.content.toLowerCase().indexOf("morning") != -1 &&
			message.content.toLowerCase().indexOf("bookery") != -1
		) {
			afkAction.checkIfUserIsAFK(message);
			return await message.react(config.emotes.goodmorning);
		}
	}
}

module.exports = cafeActions;