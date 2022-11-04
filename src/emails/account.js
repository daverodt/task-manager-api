const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "dave.rodt@gmail.com",
    subject: "This is my first creation",
    text: `Welcome to the app, ${name}. Let me know how do you do.`
  });
};

const sendCancelEmail = (email, name) => {
    sgMail.send({
      to: email,
      from: "dave.rodt@gmail.com",
      subject: "Sad to see you go",
      text: `Hi ${name},\nWe're so sad to see you go please let us know how can we do better in the future.`,
    });
}

module.exports = {
    sendWelcomeEmail, 
    sendCancelEmail
};