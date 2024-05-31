import express from "express";

const app = express();

// SET TEMPLATE ENGINE AS EJS
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// ROUTES IMPORTS
import userRoutes from "./routes/users.routes.js";
import staticRoutes from "./routes/static.routes.js";

// ROUTES DECLARATION
app.use("/", staticRoutes);
app.use("/users", userRoutes);

export { app };
