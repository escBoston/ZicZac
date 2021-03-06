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


const transport = {
  host: "smtp-mail.outlook.com",
  port : 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
}

var transporter = nodemailer.createTransport(transport)

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
    to: creds.USER,
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


