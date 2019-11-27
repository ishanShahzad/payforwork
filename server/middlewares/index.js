const mongoose = require("mongoose");
//connect to db
module.exports = () => {
  mongoose
    .connect(
      "mongodb://junaidanwar:Ju11221545@cluster0-shard-00-00-f95u6.mongodb.net:27017,cluster0-shard-00-01-f95u6.mongodb.net:27017,cluster0-shard-00-02-f95u6.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
      { useNewUrlParser: true }
    )
    .then(() => console.log("DB Connected"));
};
