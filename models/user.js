export default (sequelize, DataTypes) => {

  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = models => {
    User.hasMany(models.Wallet, { foreignKey: "userId" });
    User.hasMany(models.Order, { foreignKey: "userId" });
    User.hasMany(models.Transaction, { foreignKey: "buyerId", as: "BuyTransactions" });
    User.hasMany(models.Transaction, { foreignKey: "sellerId", as: "SellTransactions" });
    User.hasMany(models.Transfer, { foreignKey: "fromUserId", as: "TransfersFrom" });
    User.hasMany(models.Transfer, { foreignKey: "toUserId", as: "TransfersTo" });
  };

  return User;
};
