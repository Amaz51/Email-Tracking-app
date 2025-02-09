This project is a web application developed using Node.js, Express, and MongoDB. It integrates with Mailgun to send emails and track their status when opened. The app also provides a frontend interface for users to send emails and view their status updates.

Features
Send Emails: Users can compose and send emails directly from the frontend.
Email Tracking: Emails are tracked for open status using Mailgun webhooks.
Email Status Records: Sent emails are displayed in a table with their respective statuses and timestamps.
Database Integration: MongoDB is used to store sent email records for persistence.

How I Built It

1. Backend Development

Server Setup:
Created an Express server to handle API requests.

Routes:

Defined routes for sending emails (/api/emails/send) and fetching email records (/api/emails/records).

Email Controller:

Developed controller functions to integrate with Mailgun for email sending and tracking.
Stored sent email information in MongoDB using Mongoose.

Database Integration:

Set up MongoDB for persistent storage of email records.



2. Mailgun Integration
Registered with Mailgun and configured the API.
Implemented a webhook endpoint to listen for tracking events (email opens).
Verified Mailgun domain setup to enable email tracking and delivery.



3. Frontend Development

React Components:

Developed EmailForm.js for users to send emails.
Created EmailStatusList.js to display a list of sent emails with their open status and timestamps.

State Management:

Used React hooks (useState, useEffect) for data fetching and dynamic rendering.

Styling:

Applied CSS for a clean and responsive interface.



4. Testing

Postman Testing:

Verified backend routes and APIs using Postman.

Frontend Testing:

Tested the user interface for form submission and data display.

Mailgun Webhook Testing:

Sent test emails and tracked their open status using Mailgun's webhook system.
