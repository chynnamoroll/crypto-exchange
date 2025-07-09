const { User, Wallet, Order } = require("../models");

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll({
    include: [Wallet, Order]
  });
  res.json(users);
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });
  res.status(201).json(user);
};
