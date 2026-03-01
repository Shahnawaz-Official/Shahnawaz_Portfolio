const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    shortDescription:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Certificate = mongoose.model("Certificate", certificateSchema);

module.exports = Certificate;