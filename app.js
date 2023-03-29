const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

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
          FNAME: fName,
          LNAME: lName,
        },
      },
    ],
  };
  var jsonData = JSON.stringify(data);

  const url = "https://us21.api.mailchimp.com/3.0/lists/9f7bf0a398";

  const options = {
    method: "POST",
    auth: "Ahmad1:ff3cc0479c379bfdf26c08f738adb5ae-us21",
  };

  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData)
  request.end()
});



app.listen(4000, () => {
  console.log("server is up and running on port 4000");
});

// my API Key
// ff3cc0479c379bfdf26c08f738adb5ae-us21

//audience id
// 9f7bf0a398
