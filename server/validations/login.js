const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!Validator.isLength(data.password, { min: 1, max: 30 })) {
    errors.password = "password must have 6 charecters";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "paasword is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
