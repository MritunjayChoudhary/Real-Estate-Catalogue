const Property = require("../model/property-model");

const propertyForm = async(req,res) => {
    try {
        const response = req.body;
        await Property.create(response);
        return res.status(200).json({message:"DATA SENT SUSSFULLY"});
    } catch (error) {
        return res.status(500).json({message:"data not delivered"});
    }
};

module.exports = propertyForm;