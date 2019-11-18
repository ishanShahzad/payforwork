const mongoose = require("mongoose");
//connect to db
module.exports = () => {
  mongoose
    .connect(
      "mongodb+srv://junaidanwar:Ju11221545@cluster0-f95u6.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    )
    .then(() => console.log("DB Connected"));
};
