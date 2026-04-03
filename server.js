require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const leadRoutes = require("./routes/leadRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // This serves your .html files

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Routes - Linking the routes file
app.use("/api/leads", leadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));