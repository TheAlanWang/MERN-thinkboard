import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


app.use(
  cors({
    origin: ["https://thealanwang.github.io"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: false,
  })
);


app.use(express.json());

app.use(rateLimiter);

// health check
app.get("/api/health", (req, res) => res.json({ ok: true }));

// notes routes
app.use("/api/notes", notesRoutes);

// DB connection and server start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}).catch(err => {
  console.error("DB connection failed:", err);
  process.exit(1);
});