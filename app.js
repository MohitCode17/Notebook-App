import express from "express";

const app = express();

// MIDDLEWARES

// ROUTES IMPORTS
import userRoutes from "./routes/users.routes.js";

// ROUTES DECLARATION
app.use("/users", userRoutes);

export { app };
