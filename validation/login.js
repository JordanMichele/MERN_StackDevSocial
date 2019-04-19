const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  // Using Validator to check if the email field has been inputted
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  // Using Validator to check if the email field is valid
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // Using Validator to check if the password field has been inputted
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  // Using Validator to check
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
