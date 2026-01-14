import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Vite default
  credentials: true,
}));
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
