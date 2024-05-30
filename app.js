import express from "express";

const app = express();

// TESTING SERVER
app.get("/test", (req, res) => {
  res.send("Server Health OK !!");
});

export { app };
