const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');

const pages = [
`Elemental on Cards is a card game where you can duel with your friends! Currently it is in development, so expect bugs and missing features. If you find any bugs, please report them to @createsource.

Here's the basics:
- \`/deck\` shows a list of available decks and \`/deck <deck>\` shows the cards in that deck.
- \`/info <card>\` shows the description of a card. A lot of cards have special info that are required to play the command, so be sure to understand your cards before you play them!
- \`/getdeck <deck>\` selects a set deck. \`/getdeck random\` will give you a deck of random cards. \`/getdeck create\` will DM you with an interface to create a new deck.
- \`/duel\` will put you into matchmaking. Once in, you will be put into a duel with the next available player.
- \`/duel <player>\` will request a specific player to duel. If you do this in DM's with the bot, it will DM that player the request.
- \`/duel (accept|deny)\` will accept or deny a duel request.
- \`/help\` displays a list of all commands

Head over to page 2 for more specific game info.`,
`

`
]

const howtoplay = async (inter) => {
    let page = inter.options.getInteger('page');
    if (page == null) page = 1;
    page--;

    const embed = new EmbedBuilder()
      .setTitle('HOW TO PLAY')
      .setDescription(pages[page])
      .setColor(0x00FF00)
      .setFooter({ text: `Thank you for playing Elemental on Cards!` });

    await inter.reply({ embeds: [embed] });
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('howtoplay')
    .setDescription('Learn how to play with just one simple command!')
    .addIntegerOption(option =>
        option.setName('page')
            .setDescription('The page of information you\'d like. The higher the number, the more detailed it gets!')
            .setRequired(false)
            .setMinValue(1)
    ),
  async execute() { return howtoplay },
};