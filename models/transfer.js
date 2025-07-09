export default (sequelize, DataTypes) => {

  const Transfer = sequelize.define("Transfer", {
    cryptoCurrency: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    type: DataTypes.STRING,
    status: DataTypes.STRING,
    toExternalWalletAddress: DataTypes.STRING
  });

  Transfer.associate = models => {
    Transfer.belongsTo(models.User, { as: "fromUser", foreignKey: "fromUserId" });
    Transfer.belongsTo(models.User, { as: "toUser", foreignKey: "toUserId" });
  };

  return Transfer;
};
