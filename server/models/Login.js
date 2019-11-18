const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoginSchema = Schema({
  emailaddress: { type: String, require: true },
  password: { type: String, required: true }
});

const Login = mongoose.model("login", LoginSchema);

module.exports = Login;
