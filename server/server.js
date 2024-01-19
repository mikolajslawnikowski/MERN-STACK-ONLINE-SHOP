require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/user");
const opinionRoutes = require("./routes/opinions");
const orderRoutes = require("./routes/orders");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/opinions", opinionRoutes);
app.use("/api/orders", orderRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to database & listening on port:",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
