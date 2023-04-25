require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const connectDB = require("./db/connect");

const products_routes = require("./routes/products");

if (process.env.NODE_ENV === "production") {
    const path = require("path");
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'),function (err) {
            if(err) {
                res.status(500).send(err)
            }
        });
    })
}

//middleware or set routes
app.use("/api/products", products_routes);
//function
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {

           console.log("ok");
        });
    } catch (error) {
        console.log(error);
    }
};

start()

app.get("/", (req, res) => {
    
    res.json({message : "hii"});


});





