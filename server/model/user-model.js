const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
});
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

userSchema.methods.generateToken = function(){
    try {
        return jwt.sign({
            userID :this._id,
            email:this.email,
            isAdmin:this.isAdmin,
    },
    process.env.JWT_SECRET_KEY,
    {
        expiresIn:"30d"
    }
        );
    } catch (error) {
        console.error(error);
        
    }
};



const User = new mongoose.model("user_logs",userSchema);

module.exports = User;