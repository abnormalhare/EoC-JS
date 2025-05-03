const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('deck')
    .setDescription('View available decks.'),
  async execute() { return },
};