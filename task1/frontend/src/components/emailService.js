import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/emails";

const sendEmail = (emailData) => {
  return axios.post(`${API_BASE_URL}/send`, emailData);
};

const getEmailRecords = () => {
  return axios.get(`${API_BASE_URL}/records`);
};

const emailService = {
  sendEmail,
  getEmailRecords,
};

export default emailService;
