// THIS STATIC.ROUTES.JS FILE CONTAINS THE CODE THAT RENDER VIEWS TO THE BROWSER
import express from "express";
import { setAuthStatus } from "../middlewares/setAuthStatus.js";
import User from "../models/users.model.js";

const router = express.Router();

// RENDER HOME PAGE TO "/" ROOT PATH
router.get("/", setAuthStatus, async (req, res) => {
  const user = await User.findById(req.user.userId);
  res.render("home", { authenticated: req.isAuthenticated, user });
});

// RENDER SIGN-IN PAGE TO "/sign-in" PATH
router.get("/sign-in", (req, res) => {
  res.render("signin");
});

// RENDER SIGN-UP PAGE TO "/sign-up" PATH
router.get("/sign-up", (req, res) => {
  res.render("signup");
});

export default router;
