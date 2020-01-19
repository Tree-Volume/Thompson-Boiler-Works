import axios from 'axios';

const sendEmail = () => {
    axios.post("/email")
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
};

export default sendEmail;