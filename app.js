const express = require("express");
const bodyParser = require("body-parser");
const https = require("https")

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const fName = req.body.firstName;
  const lName = req.body.lastName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  var jsonData = JSON.stringify(data);

  const url = 

  https.request(url, options, function(response))

});

app.listen(4000, () => {
  console.log("server is up and running on port 4000");
});

// my API Key
// 41b8e8396b51051582fbd6e1d0aaa0f3-us21

//audience id
// 9f7bf0a398
