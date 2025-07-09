export default (sequelize, DataTypes) => {

  const Transaction = sequelize.define("Transaction", {
    cryptoCurrency: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    priceTotal: DataTypes.FLOAT,
    fiatCurrency: DataTypes.STRING
  });

  Transaction.associate = models => {
    Transaction.belongsTo(models.User, { as: "buyer", foreignKey: "buyerId" });
    Transaction.belongsTo(models.User, { as: "seller", foreignKey: "sellerId" });
  };

  return Transaction;
};
