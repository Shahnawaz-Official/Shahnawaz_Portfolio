const Project = require("../model/project.model")
const { uploadProjectImage } = require("../services/storage.services")



async function createAdminProject(req, res) {
    const { title, shortDescription, description, image, githubLink, category } = req.body;

    try {
        if (!title && !shortDescription && !description && !image) {
            return res.status(400).json({
                message: "ALL Fild Required"
            });
        }

        const result = uploadProjectImage(req.file.buffer.toString("base64"))
        const project = await Project.create({
            title,
            shortDescription,
            description,
            image: (await result).url,
            githubLink,
            category,
        })
        return res.status(201).json({
            message: "Project Created",
            project: {
                id: project._id,
                title: project.title,
                shortDescription: project.shortDescription,
                description: project.description,
                image: project.image,
                githubLink: project.githubLink,
                category: project.category
            }
        })

    } catch (error) {
        console.log("Create project error ", error)
    }

}



module.exports = {
    createAdminProject,
}