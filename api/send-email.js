const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export default (req, res) => {
  console.log(req.body);
  var mailOptions = {
    from: req.body.email,
    to: process.env.GMAIL_USER,
    subject: "Portfolio - Message from " + req.body.name,
    text: req.body.message + "\n\n" + req.body.name + "\n" + req.body.email,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ error: error });
    } else {
      console.log(info);
      res.status(200).send({ success: info });
    }
  });
};
