const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function ValidateLoginInput(data) {
  let errors = {};
  data.eMail = !isEmpty(data.eMail) ? data.eMail : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.eMail)) {
    errors.eMail = "Email is inValid";
  }
  if (Validator.isEmpty(data.eMail)) {
    errors.eMail = "Email is requierd";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = " Password must have 6 characters minimum";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "password is requierd";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
