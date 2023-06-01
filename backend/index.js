const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

require("dotenv/config");

const api = process.env.API_URL;

const productSchema = mongoose.Schema({
  name: String,
  image: String,
  countInStock: Number,
});

const Product = mongoose.model("Product", productSchema);

// http://localhost:3000/api/v1/products
app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
    name: "hair",
    image: "url",
  };
  res.send(product);
});

app.post(`${api}/products`, (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    countInStock: req.body.countInStock,
  });

  product
    .save()
    .then((createdProduct) => {
      res.status(201).json(createdProduct);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((mongoose) => console.log("mongoose Db Connected Successfully"))
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log(api);
  console.log("server is running on localhost3000");
});
