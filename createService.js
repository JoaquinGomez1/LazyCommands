const Service = require("node-windows").Service;

// Create a new service object
const svc = new Service({
  name: "Lazy Commands",
  description: "Run commands from your phone",
  script: "./server.js",
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on("install", function () {
  svc.start();
});

svc.install();
