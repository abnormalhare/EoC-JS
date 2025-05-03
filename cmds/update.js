const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");
const path = require("path")
const { exec } = require("child_process");

const update = async (inter) => {
    await inter.reply("Updating the bot!");

    // run node update.js
    exec("node update.js", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            inter.followUp(`Error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            inter.followUp(`Error: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        inter.followUp(`Output: ${stdout}`);
    });

    await inter.editReply("Commands updated, restarting bot...");
    // call index.js and end the current process
    exec("node index.js", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    process.exit(0);
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("update")
    .setDescription("Update the Bot")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),
  async execute() {
    return update;
  },
};
