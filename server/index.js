const express = require("express");
const app = express();
const middleware = require("./middlewares");

//import Routes
const authroute = require("./Routes/Routes");
middleware();

//routes middlewares
app.use(express.json(), authroute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is listening on port " + PORT);
});
