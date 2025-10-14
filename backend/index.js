const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();
const route= require("./routes")
app.use(cors());
app.use(express.json());

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({  
  extended: true
}));

app.use("/uploads", express.static("uploads"));

app.use(
  cookieSession({
    name: "session",
    keys: ["helpers"],
    maxAge: 24 * 60 * 60 * 1000, // Fixed: Correct the maxAge value to milliseconds
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes section
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({message: "Welcome to the API"});
});


app.use("/api",route)

app.listen(5000, () => {
  console.log(`Server started at port 5000`);
});