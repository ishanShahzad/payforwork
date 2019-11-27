const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  console.log(data);

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password_confirm = !isEmpty(data.password_confirm)
    ? data.password_confirm
    : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  // console.log(data.email)

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 to 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name Feild is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must have 6 characters";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (Validator.isEmpty(data.password_confirm)) {
    errors.password_confirm = "Password is required";
  }
  if (!Validator.isLength(data.password_confirm, { min: 6, max: 30 })) {
    errors.password_confirm = "Password must have 6 characters";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "lastname is required";
  }
  if (Validator.isEmpty(data.location)) {
    errors.location = "location is required";
  }
  if (Validator.isEmpty(data.type)) {
    errors.type = "type is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
