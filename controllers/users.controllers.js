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
  } catch (error) {
    res.status(500).json({ msg: "Error creating user account !!", error });
  }
};

// 👉 SIGNIN CONTROLLER
export const handleUserSignin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.json({ msg: "All fields are required !!" });

    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password)))
      return res.render("signin", { error: "Invalid email or password !!" });

    // SENT AUTH TOKEN TO USER IN COOKIE
    authToken(user._id, res);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ msg: "Error signin user account !!", error });
  }
};

// 👉 LOGOUT CONTROLLER
export const handleUserLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.redirect("/sign-in");
  } catch (error) {
    res.status(500).json({ msg: "Error logout user account !!", error });
  }
};
