const {
  MessageEmbed
} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);

module.exports = {
  name: "afk",
  category: "<:mzgearbox:1030078444006035456> Settings",
  aliases: ["awayfromkeyboard",],
  cooldown: 10,
  usage: "afk [TEXT]",
  description: "Set yourself AFK",
  type: "user",
  run: async (client, message, args, user, text, prefix, player) => {
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    try {
      if(args[0]) client.afkDB.set(message.guild.id+user.id, args.join(" "), "message");
      client.afkDB.set(message.guild.id+user.id, Date.now(), "stamp");
      message.reply(`<:mztrue:1029462082992746615> **I set you \`AFK\` now** <:mzchat:1030122629811671201> **Reason :  ${args.join(" ")}**\n> **Note: Write \`[+afk]\` infront of your Message to stay afk but still write**`);
    } catch (e) {
      console.log(String(e.stack).grey.bgRed)
      return message.reply({embeds : [new MessageEmbed()
        .setFooter(client.getFooter(es)).setColor(es.wrongcolor)
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["settings"]["afk"]["variable3"]))
      ]});
    }
  }
}
/**
 * @INFO
 * Bot Coded by Mohamed Khire#8972 | https://github.com/mohamedkhire
 * @INFO
 * Work for Diamond Suport | https://discord.gg/YjfnguSVGb
 * @INFO
 * Please mention Him / Mohamed Khire Development, when using this Code!
 * @INFO
 */