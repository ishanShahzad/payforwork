const mongoose = require("mongoose");

const SingUpSchema = new mongoose.Schema({
  eMail: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },

  jobType: {
    type: String,
    required: true
  }
});

module.exports = new mongoose.model("SignUp", SingUpSchema);
