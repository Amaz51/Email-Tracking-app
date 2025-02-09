import React, { useState } from "react";
import emailService from "./emailService.js";
import "../App.css"
function EmailForm() {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    text: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await emailService.sendEmail(formData);
      setMessage(response.data.message || "Email sent successfully!");
    } catch (error) {
      setMessage("Failed to send email.");
    }
  };

  return (
    <div className="email-form">
      <h2>Send an Email</h2>
      <form onSubmit={handleSubmit}>
        <label>To:</label>
        <input
          type="email"
          name="to"
          value={formData.to}
          onChange={handleChange}
          required
        />
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <label>Message:</label>
        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EmailForm;
