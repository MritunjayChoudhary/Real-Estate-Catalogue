const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    propertyType:{
        type:String,
        require:true
    },
    Negotiable:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
    ,
    ownership:{
        type:String,
        require:true
    },
    propertyAge:{
        type:String,
        require:true
    },
    propertyApproved:{
        type:String,
        require:true
    },
    propertyDescription:{
        type:String,
        require:true
    },
    bankLoan:{
        type:String,
        require:true
    },
    length:{
        type:String,
        require:true
    },
    breath:{
        type:String,
        require:true
    },
    totalArea:{
        type:String,
        require:true
    },
    areaUnit:{
        type:String,
        require:true
    },
    noOfBhk:{
        type:String,
        require:true
    },
    noOfFloor:{
        type:String,
        require:true
    },
    attached:{
        type:String,
        require:true
    },
    westernToilet:{
        type:String,
        require:true
    },
    furnished:{
        type:String,
        require:true
    },
    carParking:{
        type:String,
        require:true
    },
    lift:{
        type:String,
        require:true
    },
    electricity:{
        type:String,
        require:true
    },
    facing:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    postedBy:{
        type:String,
        require:true
    },
    saleType:{
        type:String,
        require:true
    },
    featuredPackage:{
        type:String,
        require:true
    },
    ppdPackage:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    area:{
        type:String,
        require:true
    },
    pinCode:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    landmark:{
        type:String,
        require:true
    },
    latitude:{
        type:String,
        require:true
    },
    longitude:{
        type:String,
        require:true
    }
});

const Property = new mongoose.model("property_logs",propertySchema);

module.exports = Property;