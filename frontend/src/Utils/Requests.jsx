import axios from "axios";

const sendEmail = emailParameters => {
  const emailObject = {
    origin: emailParameters.origin,
    name: emailParameters.name,
    from: emailParameters.from,
    subject: emailParameters.subject,
    body: emailParameters.body,
    resumeFormat: emailParameters.resumeFormat,
    resumeText: emailParameters.resumeText
  };
  axios
    .post(
      "/api/email",
      emailObject,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

const sendFile = file => {
  let formData = new FormData();
  formData.append("resume", file, file.name);
  axios
    .put(
      "/api/resume",
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data;`,
        }
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export { sendEmail, sendFile };
