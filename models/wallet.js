export default (sequelize, DataTypes) => {

  const Wallet = sequelize.define("Wallet", {
    currency: DataTypes.STRING,
    balance: DataTypes.FLOAT
  });

  Wallet.associate = models => {
    Wallet.belongsTo(models.User, { foreignKey: "userId" });
  };

  return Wallet;
};
