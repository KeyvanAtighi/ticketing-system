const express = require("express");
require("colors");
require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 5000;

// connect to DB
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log("server running on port 5000"));
