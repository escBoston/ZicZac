var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('../../dev/config');

const contact = express();
contact.use(cors());
contact.use(express.json());
contact.use('/', router);
contact.listen(5000, () => console.log("Server Running"));
/*
var transport = {
    service: 'gmail', // Don’t forget to replace with the SMTP host of your provider
    secure: false,
    port: 25,
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }, tls:{
      rejectUnauthorized:false
    }
}
*/

const transport = {
  host: "smtp-mail.outlook.com",
  port : 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
}

var transporter = nodemailer.createTransport(transport)



//var transporter = nodemailer.createTransport(transport)

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/contact', (req, res, next) => {
  var email = req.body.email
  var message = req.body.message
  var content = `email: ${email} \n message: ${message} `

  var mail = {
    sender: email,
    to: creds.USER,  // Change to email address that you want to receive messages on
    subject: 'Feedback from the User',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})


