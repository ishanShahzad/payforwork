const router = require("express").Router();
const userData = require(".././models/user");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
router.get("/allDataOne", (req, res) => {
  userData.find().then(data => res.json(data));
});
router.post("/registration", (req, res) => {
  const { email, firstName, lastName, location, password, workType } = req.body;
  const user = { email, firstName, lastName, location, password, workType };
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (hash) {
        user.password = hash;
        const saveUser = new userData(user);
        saveUser.save().then(() => res.send("user has signed up"));
      } else {
        res.json("hash error occured");
      }
    });
  });
});
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const loginData = { email, password };
  userData.findOne({ email: loginData.email }).then(useremail => {
    if (useremail) {
      bcrypt.compare(loginData.password, useremail.password, (err, match) => {
        if (match) {
          jwt.sign(
            { email: useremail.email, id: useremail._id },
            "secret",
            function(err, token) {
              if (err) {
                res.json("token error");
              } else {
                res.json(token);
              }
            }
          );
        } else {
          res.json("password doesn't match");
        }
      });
    } else {
      res.json("email not found");
    }
  });
});
module.exports = router;
