const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");

// import Routes

const authRoutes = require("./Routes/index");

require("./middleware/index")(app);

// Startegy import

require("./passport/JWT-strategy")(passport);

// passport initialization

app.use(passport.initialize());

// cors

app.use(cors());

// Server initiaization

app.use(express.json(), authRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running well on port" + PORT);
});
