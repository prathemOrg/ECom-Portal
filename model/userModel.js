const mongoose = require('mongoose');

const userSchema = mongoose.Schema
    ({
        userroleid : { type : String, ref : 'UserRole'},
        username: { type: String, required: true },
        firstname: { type: String, required: true },
        middlename: { type: String },
        lastname: { type: String, required: true },
        email: {type: String, required: true, unique: true },
        mobile: { type: String, required: true, unique: true, minlength: 10, maxlength: 10 },
        gender: {type : String, enum : ["Male", "Female"] },
        address: { type: String, required: true },
        password: { type: String, required: true, minlength: 6, maxlength: 12 }
    });
    
export default mongoose.model("ECommerece", userSchema, "User");