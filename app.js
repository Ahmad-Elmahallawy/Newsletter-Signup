const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static("public"))

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/signup.html")
})

app.listen(4000, () => {
  console.log("server is up and running on port 4000");
});
