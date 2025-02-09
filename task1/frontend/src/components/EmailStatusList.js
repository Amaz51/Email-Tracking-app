import React, { useEffect, useState } from "react";
import emailService from "./emailService.js";
import "../App.css"
function EmailStatusList() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await emailService.getEmailRecords();
        setRecords(response.data);
      } catch (error) {
        console.error("Failed to fetch email records:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, []);

  return (
    <div className="email-records-container">
      <h2>Email Records</h2>
      {loading ? (
        <p>Loading records...</p>
      ) : records.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Recipient</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record._id}>
                <td>{record.to}</td>
                <td>{record.subject}</td>
                <td>{record.text}</td>
                <td>{record.status}</td>
                <td>{new Date(record.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No email records found.</p>
      )}
    </div>
  );
}

export default EmailStatusList;
