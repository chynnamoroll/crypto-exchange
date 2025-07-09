import express from 'express';
import { sequelize } from './models/index.js';

const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/users", userRoutes);

const start = async () => {
  await sequelize.sync({ force: true });
  app.listen(3000, () => console.log("Server started on port 3000"));
};

start();
