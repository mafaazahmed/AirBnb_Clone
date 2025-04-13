const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


async function main() {
    await mongoose.connect('mongodb+srv://MafaazAhmed:WlgNiBip5rZIU59i@cluster0.wqvijbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
};

main().then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
});

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();