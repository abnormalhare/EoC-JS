const fs = require("fs/promises");

var packs;
var cards;
var players;

module.exports = {
    start: async () => {
        load();
        console.log("Bot finished loading!");
    },

    save: async () => {
        await save();
    },
}

const load = async () => {
    const data = await fs.readFile("./data.json", "utf8");
    const json = JSON.parse(data);

    packs = json.pack_data;
    cards = json.card_data;
    players = json.player_data;

    console.log("Data loaded!");
}

const save = async () => {
    const data = {
        pack_data: packs,
        card_data: cards,
        player_data: players,
    };

    await fs.writeFile("./data.json", JSON.stringify(data, null, 2));
    console.log("Data saved!");
}
