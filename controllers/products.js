const { lazy } = require("react");
const Product = require("../models/product");


const getalldatas = async (req, res) => {
    const myData = await Product.find({
        $and: [
            { car: { $in: ["BMW", "Mercedes"] } },
            { income: { $lt: "$5" } }]
    })
    res.status(200).json({ myData });
};


const getalldatastest = async (req, res) => {
    const myData = await Product.find({
        gender: "Male",
        phone_price: { $gt: 10000 }
    })
    res.status(200).json({ myData });
};

const querythree = async (req, res) => {
    const myData = await Product.find({
        $and: [
            { last_name: /^M/ },
            { $expr: { $gt: [{ $strLenCP: '$quote' }, 15] } },
             {email: {$regex: new RegExp("^.*" + '$last_name' + ".*$")}}
        ]

    })

    res.status(200).json({ myData });
};

const queryfour = async (req, res) => {
    const myData = await Product.find({
        $and: [
          { car: { $in: ["BMW", "Mercedes", "Audi"] } },
          { email: { $not: { $regex: "[0-9]"}}}
      ]
      })

    res.status(200).json({ myData });
};

const queryfive = async (req, res) => {
    const myData = await Product.aggregate([
        // group by city and calculate the number of users and their average income
        {
            $group: {
                _id: "$city",
                count: {$sum: 1},
                avg_income: {$avg: {$toDouble: {$substr: ["$income", 1, -1]}}}
            }
        },
        // sort by count in descending order and limit to the top 10 cities
        {
            $sort: {count: -1}
        },
        {
            $limit: 10
        }
    ])
    
    res.status(200).json({ myData });

};




module.exports = { getalldatas, getalldatastest, querythree, queryfour, queryfive };


