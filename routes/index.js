const express = require("express");
const router = express.Router();
const { exec } = require("child_process");

router.post("/", (req, res) => {
  let { text, time } = req.body;

  if (isNaN(time)) time = undefined;
  if (time == 0) time = undefined;
  if (time) time = time * 60;
  if (time == undefined) time = "";
  text = text.toLowerCase();

  console.log(text, time);

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
      // Cerrar sesión no acepta parámetros de tiempo.
      exec("shutdown /L");
      break;

    case "apagar":
      if (time) exec(`shutdown /s /t ${time}`);
      else exec("shutdown /s");
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
