const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    console.log("sciascic" + decodedToken.username);
    req.userData = { email: decodedToken.email, userId: decodedToken.userId, username: decodedToken.username };
    next();
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated!" });
  }
};
