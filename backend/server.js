const express = require("express");
const { check, body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const multer = require("multer");
const mime = require("mime");
const secrets = require("./secret/back-secret.json");
var storage = multer.diskStorage({
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + "." + mime.getExtension(file.mimetype));
  }
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "application/pdf") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .pdf format allowed!"));
    }
  }
});
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  `${secrets.GMAIL_CLIENT_ID}`,
  `${secrets.GMAIL_CLIENT_SECRET}`,
  "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({
  refresh_token: `${secrets.GMAIL_REFRESH_TOKEN}`
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
    refreshToken: `${secrets.GMAIL_REFRESH_TOKEN}`,
    accessToken: accessToken
  }
});
var resume;
const app = express();
const router = express.Router();
app.use(express.json());

router.post(
  "/email",
  [
    check("origin", "origin failed")
      .isAlpha()
      .isLength({ min: 2 })
      .escape(),
    check("name", "name failed")
      .isAlpha()
      .isLength({ min: 2 })
      .escape(),
    check("from", "invalid from input")
      .isEmail()
      .normalizeEmail(),
    check("subject", "invalid subject input")
      .if(body("origin").contains("CONTACT"))
      .isAlphanumeric()
      .isLength({ min: 2 })
      .escape(),
    check("body", "invalid body input")
      .isAlphanumeric()
      .isLength({ min: 2 })
      .escape(),
    check("resumeText", "invalid resume text")
      .if(body("origin").contains("CAREERS"))
      .if(body("resumeFormat").contains("paste"))
      .isAlphanumeric()
      .isLength({ min: 2 })
      .escape()
  ],
  (req, res) => {
    //calls form validation and returns error if there is one
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(422).json({ errors: errors.array() });
    }
    //form parameters
    const formOrigin = req.body.origin;
    const formName = req.body.name;
    const formFrom = req.body.from;
    const formSubject = req.body.subject;
    const formBody = req.body.body;
    const formResumeFormat = req.body.resumeFormat;
    const formResumeText = req.body.resumeText;
    //format subject of email
    const subject = `TBW-WEBSITE - ${formOrigin} - FROM: ${formName} ${
      formOrigin === "CONTACT" ? `REGARDING: ${formSubject}` : ""
    }`;
    //format email
    const options = {
      from: email,
      to: "contact.thompsonboilerworks@gmail.com",
      subject: subject,
      attachments:
        formOrigin === "CAREERS" && formResumeText === undefined
          ? [
              {
                filename: resume.filename,
                path: resume.path
              }
            ]
          : [],
      html: `<h1>${formOrigin === "CONTACT" ? formSubject : "Careers Application"}</h1>
             <p>From: ${formName} (${formFrom})</p>
             <p>${formBody}</p>
             <p>${formResumeText !== undefined ? formResumeText : ""}</p>`
    };
    //send email
    transporter.sendMail(options, (error, info) => {
      if (error) res.status(500).send(error.message);
      transporter.close();
      res.send(info);
    });
  }
);

router.put("/resume", upload.single("resume"), (req, res) => {
  //store file
  resume = req.file;
  //send response
  res.send(req.file);
});

app.use("/api", router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("Server running on port 5000");
});
