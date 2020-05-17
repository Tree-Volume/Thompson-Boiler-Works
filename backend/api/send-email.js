const { google } = require("googleapis");
const nodemailer = require("nodemailer")
const secrets = require("../secret/back-secret.json");

const sender = "contact.thompsonboilerworks@gmail.com";
const receiver = "contact.thompsonboilerworks@gmail.com";
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

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: sender,
    clientId: `${secrets.GMAIL_CLIENT_ID}`,
    clientSecret: `${secrets.GMAIL_CLIENT_SECRET}`,
    refreshToken: `${secrets.GMAIL_REFRESH_TOKEN}`,
    accessToken: accessToken
  }
});

const sendEmail = (form,resume,cb) => {
  //format subject of email
  const subject = `TBW-WEBSITE - ${form.origin} - FROM: ${form.name} ${
    form.origin === "CONTACT" ? `REGARDING: ${form.subject}` : ""
  }`;
  //format email
  const options = {
    from: sender,
    to: receiver,
    subject: subject,
    attachments:
      form.resumeFormat === "upload"
        ? [
            {
              filename: resume.filename,
              path: resume.path
            }
          ]
        : [],
    html: `<h1>${form.origin === "CONTACT" ? form.subject : "Careers Application"}</h1>
            <p>From: ${form.name} (${form.from})</p>
            <p>${form.body}</p>
            <p>${form.resumeFormat === "upload" ? "" : form.resumeText }</p>`
  };
  //send email
  transporter.sendMail(options, (error, info) => {
    if (error) cb(500,error.message);
    transporter.close();
    cb(200,info);
  });
}
module.exports = sendEmail;
