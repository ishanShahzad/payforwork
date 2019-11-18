const app = require("express").Router();
const Signup = require("../models/Signup");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

// for get user

app.get("/get_users", (req, res) => {
  Signup.find().then(data => res.json(data));
});

// for Signup

app.post("/Signup", (req, res) => {
  const {
    emailaddress,
    firstname,
    lastname,
    password,
    confirmpassword,
    location,
    type
  } = req.body;
  const user = {
    emailaddress,
    firstname,
    lastname,
    password,
    confirmpassword,
    location,
    type
  };
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (hash) {
      user.password = hash;
      user.confirmpassword = hash;
      const newUser = new Signup(user);
      newUser
        .save()
        .then(() => res.json("user SIGNUP Successfull"))
        .catch(e => res.status(400).json(e));
    } else {
      console.log(e);
    }
  });
});

// for signin

app.post("/signin", (req, res) => {
  console.log(req.body);
  const email = req.body.emailaddress;
  const password = req.body.password;
  Signup.findOne({ emailaddress: email }).then(userdata => {
    if (userdata) {
      bcrypt.compare(password, userdata.password).then(isMatch => {
        if (isMatch) {
          // for token
          const token = jwt.sign({ _id: userdata.id }, "junaid");
          res.header("auth-token", token).send(token);
          // res.json(userdata);
        } else {
          res.status(404).send("Not Found");
        }
      });
    }
  });
});

module.exports = app;
