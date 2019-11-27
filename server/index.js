const express = require("express");
const app = express();
// const middleware = require("./middlewares");
const cors = require("cors");
const passport = require("passport");

//import Routes
const authroute = require("./Routes/Routes");
// middleware();
require("./middlewares/index")(app);

require("./passport/JWT-Strategy")(passport);
app.use(passport.initialize());

app.use(cors());

//routes middlewares
app.use(express.json(), authroute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is listening on port " + PORT);
});
