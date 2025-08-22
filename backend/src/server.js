import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
dotenv.config({ quiet: true }); //dotenv not to print any log

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(rateLimiter); // Apply rate limiting middleware

// app.use((req, res, next) => {
//     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//     next(); // Call the next middleware or route handler
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
});
