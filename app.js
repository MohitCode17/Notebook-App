import express from "express";

const app = express();

// MIDDLEWARES
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// ROUTES IMPORTS
import userRoutes from "./routes/users.routes.js";

// ROUTES DECLARATION
app.use("/users", userRoutes);

export { app };
