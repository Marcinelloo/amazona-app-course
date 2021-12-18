import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRauter from "./routers/userRauter.js";

const app = express();
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/users", userRauter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server ready");
});
app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.port || 5002;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
