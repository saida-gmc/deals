const { body, validationResult } = require("express-validator");

exports.registerValidator = () => [
  body("name", "name is required").notEmpty(),
  body("email", "enter a valid email ").isEmail(),
  body("password", "password is required").notEmpty(),
  body("password", "must contain more than 6 chars").isLength({ min: 6 }),
];

exports.loginValidator = () => [
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
];
exports.validation = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).send({ errors: error.array() });
  }
  next();
};
