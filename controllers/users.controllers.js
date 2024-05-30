import User from "../models/users.model.js";
import { authToken } from "../utils/authToken.js";

// 👉 SIGNUP CONTROLLER
export const handleUserSignup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password)
      return res.status(400).json({ msg: "All fields are required !!" });

    // CHECK IF USER EXISTS
    let user = await User.findOne({ email });

    if (user) return res.status(400).json({ msg: "User already exists !!" });

    user = await User.create({
      fullName,
      email,
      password,
    });

    // SENT AUTH TOKEN TO USER IN COOKIE
    authToken(user._id, res);
    res.redirect("/");
    // res.json({ msg: "User created" });
  } catch (error) {
    res.status(500).json({ msg: "Error creating user account !!", error });
  }
};

// 👉 SIGNIN CONTROLLER
export const handleUserSignin = async (req, res) => {};

// 👉 LOGOUT CONTROLLER
export const handleUserLogout = async (req, res) => {};
