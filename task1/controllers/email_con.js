require("dotenv").config();
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const Email = require("../models/email");

const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: "api", key: process.env.MAILGUN_API_KEY });

exports.sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  const emailData = {
    from: process.env.MAILGUN_SENDER_EMAIL,
    to,
    subject,
    text,
    html: `<p>${text}</p><img src="${process.env.BASE_URL}/api/emails/track?email=${to}" width="1" height="1" alt="tracker"/>`,
  };

  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN, emailData);
    const emailRecord = new Email({ to, subject, text, status: "Sent" });
    await emailRecord.save();

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
};

exports.trackEmail = async (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).send("Invalid tracking request");

  try {
    await Email.findOneAndUpdate(
      { to: email }, 
      { status: "Opened" }, 
      { new: true });
    res.status(200).send("Hey boss,Wassup");
  } catch (err) {
    res.status(500).json({ message: "Failed to track email", err });
  }
};


exports.getEmailRecords = async (req, res) => {
  try {
    const emailRecords = await Email.find();
    res.status(200).json(emailRecords);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch email records", error: err });
  }
};

