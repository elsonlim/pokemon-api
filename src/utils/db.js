const mongoose = require("mongoose");

const mongodbUrl = process.env.MONGO_URL;

mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to db");
});
