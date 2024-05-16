const express = require("express");
const router = express.Router();
const propertyForm = require("../controller/property-controller");

router.route("/property").post(propertyForm);
module.exports = router;