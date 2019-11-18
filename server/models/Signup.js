const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SignupSchema = Schema({
  emailaddress: { type: String, require: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  confirmpassword: { type: String },
  location: { type: String, required: true },
  type: { type: String }
});

const Signup = mongoose.model("signup", SignupSchema);

module.exports = Signup;
