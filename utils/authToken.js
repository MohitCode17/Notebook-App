import jwt from "jsonwebtoken";

export const authToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  const expirationDate = new Date(Date.now() + 24 * 3600000); // 1 day from now

  res.cookie("token", token, {
    httpOnly: true,
    expires: expirationDate,
  });

  return token;
};
