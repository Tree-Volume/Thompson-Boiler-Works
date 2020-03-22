const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const multer  = require('multer');
const mime = require('mime');
const secrets = require('./secret/back-secret.json');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + mime.getExtension(file.mimetype))
  }
})
var upload = multer({ storage: storage })
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  `${secrets.GMAIL_CLIENT_ID}`,
  `${secrets.GMAIL_CLIENT_SECRET}`,
  "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({
  refresh_token:
    `${secrets.GMAIL_REFRESH_TOKEN}`
});
const accessToken = oauth2Client.getAccessToken();
const port = 5000;
const email = "";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "contact.thompsonboilerworks@gmail.com",
    clientId: `${secrets.GMAIL_CLIENT_ID}`,
    clientSecret: `${secrets.GMAIL_CLIENT_SECRET}`,
    refreshToken:
      `${secrets.GMAIL_REFRESH_TOKEN}`,
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
          <p>${emailObject.origin == "CAREERS" ? emailObject.resumeText : ""}</p>`
  };

  transporter.sendMail(options, (error, info) => {
    if (error) res.status(500).send(error.message);
    transporter.close();
    res.send(info);
  });
});

router.post("/file", upload.single('resume'), (req, res) => {
  console.log(req.file.filename)
  res.send(req.file);
});

app.use("/api", router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("Server running on port 5000");
});
