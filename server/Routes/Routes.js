const app = require("express").Router();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const passport = require("passport");

//for verify token
const validateLoginInput = require("../validations/login");
const validateRegisterInput = require("../validations/register");
const UserModel = require("../models/Signup");

// signup schema
// const Signup = require("../models/Signup");

// for get user

app.get("/get_users", (req, res) => {
  UserModel.find().then(data => res.json(data));
});

// for Signup

app.post("/register", function(req, res) {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) return res.status(400).json(errors);
  UserModel.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: "Email already exists"
      });
    } else {
      const newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        lastname: req.body.lastname,
        location: req.body.location,
        type: req.body.type
      });
      bcrypt.hash(newUser.password, 10, (err, hash) => {
        if (err) console.error("there was an error", err);
        else {
          newUser.password = hash;
          newUser.save().then(user => {
            res.status(200).json({ success: true });
          });
        }
      });
    }
  });
});

// for signin

app.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  UserModel.findOne({ email: email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id
          // name:user.name,
          // image:user.image
        };
        jwt.sign(
          payload,
          "secret",
          {
            expiresIn: 3600
          },
          (err, token) => {
            if (err) console.error("Ther is some error in token", err);
            else {
              res.json({
                success: true,
                token: `Bearer ${token}`
              });
            }
          }
        );
      } else {
        errors.password = "incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

app.get("/me", passport.authenticate("jwt", { session: false }), (req, res) => {
  return res.json({
    id: req.user.id
  });
});

module.exports = app;
