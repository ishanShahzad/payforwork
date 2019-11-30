const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const passport = require("passport");
const strategy = require("./passport/jwtStrategy");
const app = express();
// MongoDB
const db = require("./config/keys").ModuleURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."));

strategy(passport);
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
// routes
app.use("/users", userRoute);

app.use(express.static(path.resolve(__dirname, "../public")));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
