const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
exports.Register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).send({
        errors: [{ msg: "user already exists" }],
      });
    }

    const newUser = new User({ ...req.body });
    // hashage
    const hashPwd = await bcrypt.hash(password, saltRounds);
    newUser.password = hashPwd;

    // creer token
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    await newUser.save();
    res.send({ msg: "user registred", user: newUser, token });
  } catch (error) {
    res.status(500).send({
      errors: [
        {
          msg: "cannot register",
        },
      ],
    });
    console.log(error);
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (!findUser) {
      res.status(400).send({
        errors: [
          {
            msg: "bad credantials",
          },
        ],
      });
    }

    const comparePwd = await bcrypt.compare(password, findUser.password);
    if (!comparePwd) {
      return res.status(400).send({
        errors: [
          {
            msg: "bad credantials",
          },
        ],
      });
    }
    const token = jwt.sign({ id: findUser._id }, process.env.SECRET_KEY, {
      expiresIn: "3h",
    });
    console.log(findUser.role);
    res.send({ message: "login successfully ", token, user: findUser });
  } catch (error) {
    res.status(500).send({
      errors: [
        {
          msg: "cannot login",
        },
      ],
    });
    console.log(error);
  }
};
// exports.updateUser = async (req, res) => {
//   try {
//     await User.findOneAndUpdate(
//       { _id: req.params.id },
//       { $set: { ...req.body } }
//     );
//     res.send({ mesage: "the user is updated" });
//   } catch (error) {
//     res.status(500).send("server error");
//   }
// };