const express = require("express");
const router = express.Router();
const { exec } = require("child_process");
const path = require("path");

router.post("/", (req, res) => {
  let { text } = req.body;
  text = text.toLowerCase();

  console.log(text);
  switch (text) {
    case "+":
      exec("nircmd.exe changesysvolume 5000");
      break;

    case "-":
      exec("nircmd.exe changesysvolume -5000");
      break;

    case "mutear":
      exec("nircmd.exe mutesysvolume 1");
      break;

    case "desmutear":
      exec("nircmd.exe mutesysvolume 0");
      break;

    case "cerrar sesión":
      exec("shutdown /l");
      break;

    case "apagar":
      exec("shutdown /s");
      break;

    default:
      break;
  }

  res.send("done");
});

router.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/Joaquin/Documents/Javascript/React/lazycommands/client/build/index.html"
  );
});

module.exports = router;
