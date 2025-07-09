export default (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    orderType: DataTypes.STRING,
    cryptoCurrency: DataTypes.STRING,
    fiatCurrency: DataTypes.STRING,
    pricePerUnit: DataTypes.FLOAT,
    amount: DataTypes.FLOAT,
    status: DataTypes.STRING
  });

  Order.associate = models => {
    Order.belongsTo(models.User, { foreignKey: "userId" });
  };

  return Order;
};
