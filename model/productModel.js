const mongoose = require('mongoose');

const productSchema = mongoose.Schema
    ({
        productname: { type: String, required: true },
        productprice: { type: Number, required: true },
        productdescription: { type: String, required: true },
        SKU: { type: String, required: true }
    })
export default mongoose.model("ECommerece", productSchema, "UserDetails");