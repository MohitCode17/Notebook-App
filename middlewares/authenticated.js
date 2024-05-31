import jwt from "jsonwebtoken";

export const authenticated = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect("/sign-in");
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.redirect("/sign-in");
    }

    req.user = user;
    next();
  });
};
