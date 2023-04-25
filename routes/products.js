// which path we have to go
const express = require("express");
const router = express.Router();

const { getalldatas, getalldatastest, querythree, queryfour, queryfive } = require("../controllers/products");

router.route("/").get(getalldatas);
router.route("/testing").get(getalldatastest);
router.route("/testingquerythree").get(querythree);
router.route("/testingqueryfour").get(queryfour);
router.route("/testingqueryfive").get(queryfive);


module.exports = router;