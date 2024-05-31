import jwt from "jsonwebtoken";

export const setAuthStatus = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    req.isAuthenticated = false;
    return next();
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      req.isAuthenticated = false;
      return next();
    }

    req.isAuthenticated = true;
    req.user = user;
    console.log(req.user);
    next();
  });
};
