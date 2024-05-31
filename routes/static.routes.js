// THIS STATIC.ROUTES.JS FILE CONTAINS THE CODE THAT RENDER VIEWS TO THE BROWSER
import express from "express";

const router = express.Router();

// RENDER HOME PAGE TO "/" ROOT PATH
router.get("/", (req, res) => {
  res.render("home");
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
