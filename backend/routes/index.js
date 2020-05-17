const express = require("express");
const { check, body, validationResult } = require("express-validator");
const uploadResume = require("../api/upload-resume");
const sendEmail = require("../api/send-email");
const router = express.Router();

var resume;

router.post(
  "/api/email",
  [
    check("origin", "origin failed"),
    check("name", "Invalid name input").isAlpha().isLength({ min: 2 }).escape(),
    check("from", "Invalid from input").isEmail().normalizeEmail(),
    check("subject", "Invalid subject input")
      .if(body("origin").contains("CONTACT"))
      .isAlphanumeric()
      .isLength({ min: 2 })
      .escape(),
    check("body", "Invalid body input").isLength({ min: 2 }).escape(),
    check("resumeText", "Invalid resume text")
      .if(body("origin").contains("CAREERS"))
      .if(body("resumeFormat").contains("paste"))
      .isLength({ min: 2 })
      .escape(),
  ],
  (req, res) => {
    //calls form validation and returns error if there is one
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //call send email api and return status response
    sendEmail(req.body, resume, (status,data) => {
      res.status(status).send(data);
    });
    
  }
);

router.post("/api/resume", (req, res) => {
  //upload resume
  uploadResume(req, (upload,data) => {
    //checks if there was an error uploading file
    if (upload === null) res.send().status(500).send(data);
    //update resume
    resume = upload;
    //send response
    res.send(upload);
  });
});

module.exports = router;
