const { User, Wallet } = require("../models");

(async () => {
  await User.destroy({ where: {} });
  await Wallet.destroy({ where: {} });

  const user1 = await User.create({
    name: "Alice",
    email: "alice@example.com",
    password: "hashedpassword"
  });

  await Wallet.create({ userId: user1.id, currency: "BTC", balance: 1.5 });
  await Wallet.create({ userId: user1.id, currency: "THB", balance: 50000 });

  console.log("Seeded successfully!");
})();
