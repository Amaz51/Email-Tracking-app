const express = require("express");
const router = express.Router();
const emailController = require("../controllers/email_con");

// Default route 
router.get("/", (req, res) => {
  res.send("Welcome to the Mailgunn API!");
});

router.post("/send", emailController.sendEmail);
router.get("/track", emailController.trackEmail);
router.get("/records", emailController.getEmailRecords);

module.exports = router;
