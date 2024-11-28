require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const reviewRoutes = require("./routes/reviewRoutes");
const bookRoutes = require("./routes/bookRoutes");
const db = require("./database");

// Enable CORS for all routes (allowing frontend at localhost:3000)
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Prefix all review routes with /api
app.use("/api", reviewRoutes);
app.use("/api", bookRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
