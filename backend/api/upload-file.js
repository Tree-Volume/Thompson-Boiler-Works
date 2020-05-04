const multer = require("multer");
const mime = require("mime");

var storage = multer.diskStorage({
    filename: function(req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + "." + mime.getExtension(file.mimetype));
    }
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
}
});

const resumeUpload = upload.single("resume");

const uploadFile = (req) => {
    resumeUpload(req, res, err => {
        if (err) return res.status(500).send(err.message);
        //store file
        resume = req.file;
        //send response
        res.send(req.file);
      });
}

module.exports = uploadFile;