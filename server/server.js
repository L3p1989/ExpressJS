const express = require("express"); //import express

let app = express(); //call express with app

app.get("/", (req, res) => {
  res.send("Hello from the web server side...");
}); //respond to get req by sending text

app.listen(3000); //listen on port 3000
