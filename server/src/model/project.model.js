const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    shortDescription:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image: {
        type: String,
         required:true 
    },
     githubLink: {
        type: String
    },
    category: {
        type: String, // e.g. "Full Stack", "Frontend", "Backend"
    },
     
    }, { timestamps: true })


const Project  = mongoose.model("Project",adminSchema)

module.exports = Project