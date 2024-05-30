import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import { app } from "./app.js";

// .ENV CONFIG
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

// CONNECTION WITH DATABASE & RUN SERVER
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!! ", err);
  });
