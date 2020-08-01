const express = require("express");
const router = express.Router();
const { exec } = require("child_process");

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
      break

    case "cerrar sesión":
      exec("shutdown /l");
      break

    case "apagar":
      exec("shutdown /s");
      break

    default:
      break;
  }

  res.send("done");
});

module.exports = router;
