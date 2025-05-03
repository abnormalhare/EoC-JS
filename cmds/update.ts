const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");

const update = async (inter) => {
    await inter.reply("Updating the bot! Please wait...");
    process.exit(0);
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("update")
    .setDescription("Update the Bot")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),
  async execute() { return update; },
};
