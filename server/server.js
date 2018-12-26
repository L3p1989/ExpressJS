const express = require("express"); //import express
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

let app = express(); //call express with app

// app.get("/", (req, res) => {
//   res.send("Hello from the web server side...");
// }); //respond to get req by sending text

//middleware logger
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
}); //logs all requested urls

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/formsubmission", (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let formData = {
    firstName: firstName,
    lastName: lastName
  }; //adds submitted firstName and lastName to formData
  let formJSON = JSON.stringify(formData); //converts formData to a JSON object
  fs.appendFileSync("form-submission.JSON", formJSON); //appends submission to form-submission
});

app.use(express.static(path.join(__dirname, "../public"))); //tells `express` to serve all files in the public directory

app.listen(3000); //listen on port 3000
