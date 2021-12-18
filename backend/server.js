import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRauter from "./routers/userRauter.js";

const app = express();
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use("/api/users", userRauter);

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

app.get("/", (req, res) => {
  res.send("Server ready");
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.port || 5002;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
