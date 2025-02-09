require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const emailRoutes = require("./routes/email_routes");
const uri = "mongodb+srv://amazahmed:heybros@sendtask1.vhahi.mongodb.net/?retryWrites=true&w=majority&appName=sendtask1";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// db connection
mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.use("/api/emails", emailRoutes);

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
