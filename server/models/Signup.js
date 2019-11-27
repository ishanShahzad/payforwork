const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SignupSchema = Schema({
  email: { type: String, require: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true, min: 6, max: 100 },
  password_confirm: { type: String, min: 6, max: 100 },
  location: { type: String, required: true },
  type: { type: String }
});

const Signup = mongoose.model("signup", SignupSchema);

module.exports = Signup;
