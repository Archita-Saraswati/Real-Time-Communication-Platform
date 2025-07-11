// import jwt from "jsonwebtoken";

// export const generateToken = (userId, res) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "7d",
//   });

//   res.cookie("jwt", token, {
//     maxAge: 7 * 24 * 60 * 60 * 1000, // MS
//     httpOnly: true, // prevent XSS attacks cross-site scripting attacks
//     sameSite: "strict", // CSRF attacks cross-site request forgery attacks
//     secure: process.env.NODE_ENV !== "development",
//   });

//   return token;
// };



import jwt from "jsonwebtoken";

/**
 * Generates a JWT token and sets it as an HTTP-only cookie
 * @param {string} userId - MongoDB user _id
 * @param {object} res - Express response object
 */
export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Valid for 7 days
  });

  res.cookie("jwt", token, {
    httpOnly: true,            // 🔐 JS can't access cookie (prevents XSS)
    secure: true,              // ✅ Only sent on HTTPS (required for cross-origin)
    sameSite: "None",          // ✅ Required for cross-origin cookies
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  });

  return token;
};
