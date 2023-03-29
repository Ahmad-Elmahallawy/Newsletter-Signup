const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/signup.html")
})

app.post("/", (req,res) => {
  var fName = req.body.firstName
  var lName = req.body.lastName
  var email = req.body.email
})

app.listen(4000, () => {
  console.log("server is up and running on port 4000");
});
