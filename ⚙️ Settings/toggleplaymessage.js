const { MessageEmbed } = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require("../../botconfig/emojis.json");
module.exports = {
    name: "toggleplaymessage",
    aliases: ["toggleplaymsg", "playmessage", "playmsg"],
    category: "<:mzgearbox:1030078444006035456> Settings",
    description: "Toggles playmessage (same as pruning...). If its true a message of playing a new track will be sent, even if your afk. If false it wont send any message if a new Track plays! | Default: true aka send new Track information",
    usage: "toggleplaymessage",
    memberpermissions: ["ADMINISTRATOR"],
    type: "music",
    run: async (client, message, args, cmduser, text, prefix) => {
    
      let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
      
      //run the code of togglepruning
      let { run } = require("./togglepruning");
      run(client, message, args);
  }
};

/**
 * @INFO
 * Bot Coded by Mohamed Khire#8972 | https://github.com/mohamedkhire
 * @INFO
 * Work for Diamond Suport | https://discord.gg/YjfnguSVGb
 * @INFO
 * Please mention Him / Mohamed Khire Development, when using this Code!
 * @INFO
 */
