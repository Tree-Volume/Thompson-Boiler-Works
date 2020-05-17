const multer = require("multer");
const mime = require("mime");

var storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + "." + mime.getExtension(file.mimetype));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "application/pdf") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Invalid file type"));
    }
  },
});

const resumeUpload = upload.single("resume");

const uploadResume = (req,cb) => {
  resumeUpload(req, null, (error) => {
    if (error) cb(null,error.message);
    //send response
    cb(req.file)
  })
};

module.exports = uploadResume;
