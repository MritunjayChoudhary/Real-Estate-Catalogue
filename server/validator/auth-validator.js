const { z } = require("zod");

const signupSchema = z.object({

    email : z
    .string({required_error :"email is required" })
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"must be atleast 3 characters"})
    .max(255,{message:"must not exceed 255 characters"}),
    
    password : z
    .string({required_error :"password is required" })
    .min(6,{message:"must be atleast 6 characters"})
    .max(1024,{message:"must not exceed 1024 characters"}),

});

module.exports = signupSchema;