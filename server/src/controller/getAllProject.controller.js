const Project = require("../model/project.model")

async function getAllproject(req,res){
        try {
            const project = await Project.find()
            res.status(200).json({
                message:"All Project Fatch Successfully ",
                project
            })
        } catch (error) {
            console.log("Get all project Error ",error);
            res.status(500).json({
                success: false,
                message:"Project Fatch Server Error "
            })
        }
            
        
}

module.exports = {
    getAllproject
}