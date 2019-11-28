const mongoose = require("mongoose");
module.exports = () =>
  mongoose
    .connect(
      "mongodb://Ali_Hamza:hamzarao1@cluster0-shard-00-00-5outu.mongodb.net:27017,cluster0-shard-00-01-5outu.mongodb.net:27017,cluster0-shard-00-02-5outu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() =>
      console.log(
        "congratulations!! your connection ton the database is succesfully established"
      )
    );
