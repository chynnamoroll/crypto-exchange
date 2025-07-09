import { Sequelize, DataTypes } from "sequelize";
import UserModel from "./user.js";
import WalletModel from "./wallet.js";
import OrderModel from "./order.js";
import TransactionModel from "./transaction.js";
import TransferModel from "./transfer.js";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

const User = UserModel(sequelize, DataTypes);
const Wallet = WalletModel(sequelize, DataTypes);
const Order = OrderModel(sequelize, DataTypes);
const Transaction = TransactionModel(sequelize, DataTypes);
const Transfer = TransferModel(sequelize, DataTypes);

User.associate?.({ Wallet, Order, Transaction, Transfer });
Wallet.associate?.({ User });
Order.associate?.({ User });
Transaction.associate?.({ User });
Transfer.associate?.({ User });

export {
  sequelize,
  User,
  Wallet,
  Order,
  Transaction,
  Transfer
};
