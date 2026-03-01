const Project = require("../model/project.model")

async function adminDeleteProject(req, res) {
    try {
        const { id } = req.params;
        const project = await Project.findByIdAndDelete(id);

        if (!project) {
            return res.status(404).json({
                meassage: "Project Not Found ! "
            })
        }
        res.status(200).json({
            message: "Project Deleted Successfully",
            // project
        })


    } catch (error) {
        console.log("delete Project Error ", error);

    }





}


module.exports = {
    adminDeleteProject,
}