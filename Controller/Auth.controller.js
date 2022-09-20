require("dotenv").config();
const User = require("../Model/User.model");
const jwt = require("jsonwebtoken");
const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_KEY);
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(400).send({ error: "Invalid email or password" });

    const match = user.checkpass(req.body.password);

    console.log(user.checkPassword);

    if (!match) {
      return res.status(400).send({ error: "Invalid email or password" });
    }
    const token = newToken(user);
    return res.status(200).send({ user, token });
  } catch (error) {
    return res.status(500).send({ Error: error.message });
  }
};

const Register = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (user)
    return res
      .status(400)
      .send({ error: "email already linked with another account" });

  try {
    user = await User.create(req.body);

    res.status(201).send(user);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

module.exports = { login, Register };
