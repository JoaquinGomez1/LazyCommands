const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 6653;

// ------------- MIDDLEWARES -------------
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// -------------- ROUTES ---------------
app.use(require("./routes/index.js"));

// ------------- LISTEN TO SERVER ----------
app.listen(PORT, () => {
  console.log("Server started on Port: " + PORT);
});
