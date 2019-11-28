const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  console.log(data);

  data.eMail = !isEmpty(data.eMail) ? data.eMail : "";
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password_confirm = !isEmpty(data.password_confirm)
    ? data.password_confirm
    : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.jobType = !isEmpty(data.jobType) ? data.jobType : "";
  // console.log(data.eMail)

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = "Name must be between 2 to 30 characters";
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "Name Feild is required";
  }
  if (!Validator.isEmail(data.eMail)) {
    errors.eMail = "Email is invalid";
  }

  if (Validator.isEmpty(data.eMail)) {
    errors.eMail = "Email is required";
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
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "lastName is required";
  }
  if (Validator.isEmpty(data.location)) {
    errors.location = "location is required";
  }
  if (Validator.isEmpty(data.jobType)) {
    errors.jobType = "jobType is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
