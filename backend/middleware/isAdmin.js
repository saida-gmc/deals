const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
exports.isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    console.log(token);
    if (!token) {
      return res.status(400).send("not authorized 1");
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { id } = decoded;
    const findUser = await User.findOne({ _id: id });
    if (!findUser) {
      return res.status(400).send("not authorized 2");
    }

    if (findUser.role !== "admin") {
      return res.json("Not authorized 3");
    }
    req.user = findUser;
  } catch (error) {
    res.status(400).send(" error not authorized");
  }
  next();
};
