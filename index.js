import dotenv from "dotenv";
import { app } from "./app.js";

// .ENV CONFIG
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
