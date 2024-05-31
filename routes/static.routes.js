// THIS STATIC.ROUTES.JS FILE CONTAINS THE CODE THAT RENDER VIEWS TO THE BROWSER
import express from "express";

const router = express.Router();

// RENDER HOME PAGE TO "/" ROOT PATH
router.get("/", (req, res) => {
  res.render("home");
});

export default router;
