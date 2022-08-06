const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail')


const sendEmaileEthereal = async (req,res)=>{
 
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'eduardo.cummerata@ethereal.email',
        pass: 'FCs9hXcAFXaffVPkq6'
    }
});
 
  let info = await transporter.sendMail({
    from:'"Deepakwings" <deepakvel82@gmail.com>',
    to:'bar@example.com,baz@example.com',
    subject:'Deepak wings',
    text:'sending mails'
  })
 

  res.json(info)
 
 
}

const sendEmail = async(req,res)=>{
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'ABC@gmail.com', // Change to your recipient
  from: 'deepakvel82@gmail.com', // Change to your verified sender
  subject: 'Sending Email Using Sendgrid!!!',
  text: 'Deepak Full Stack Developer',
  html: '<strong>Deepak Wings</strong>',
}

 const info = await sgMail.send(msg)
 res.json(info)
}


module.exports = sendEmail;
