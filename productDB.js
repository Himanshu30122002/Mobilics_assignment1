require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");

const ProducJson = require("./products.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.create(ProducJson);
        console.log("success");

    } catch (err) {
        console.log(error);
    }
};

start();

