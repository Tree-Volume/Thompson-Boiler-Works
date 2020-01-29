const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  "",
  "",
  "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({
  refresh_token:
    ""
});
const accessToken = oauth2Client.getAccessToken();
const port = 5000;
const email = "";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "",
    clientId: "",
    clientSecret: "",
    refreshToken:
      "",
    accessToken: accessToken
  }
});

const app = express();
const router = express.Router();
app.use(express.json());

router.post("/email", (req, res) => {
  const emailObject = req.body.emailObject;
  let subject = `TBW-WEBSITE - ${emailObject.origin} - FROM: ${emailObject.name} ${
    emailObject.origin === "CONTACT" ? `REGARDING:${emailObject.subject}` : ""
  }`;
  const options = {
    from: email,
    to: "erosdipede@gmail.com",
    subject: subject,
    html: `<h1>${
      emailObject.origin === "CONTACT" ? emailObject.subject : "Careers Application"
    }</h1>
          <p>From: ${emailObject.name} (${emailObject.from})</p>
          <p>${emailObject.body}</p>
          <p>${emailObject.resumeText}</p>`
  };

  transporter.sendMail(options, (error, info) => {
    if (error) res.status(500).send(error.message);
    transporter.close();
    res.send(info);
  });
});

router.post("/file", (req, res) => {});

app.use("/api", router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("Server running on port 5000");
});
