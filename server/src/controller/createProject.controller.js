const Project = require("../model/project.model");
const { uploadProjectImage } = require("../services/storage.services");

async function createAdminProject(req, res) {

    const { title, shortDescription, description, githubLink, category } = req.body;

    try {

        // ✅ Proper Validation
        if (!title || !shortDescription || !description || !req.file) {
            return res.status(400).json({
                message: "All Fields Required"
            });
        }

        // ✅ Convert image buffer to base64
        const base64Image = req.file.buffer.toString("base64");

        // ✅ Upload image (Cloudinary or other service)
        const result = await uploadProjectImage(base64Image);

        // ✅ Save in DB
        const project = await Project.create({
            title,
            shortDescription,
            description,
            image: result.url,
            githubLink,
            category,
        });

        return res.status(201).json({
            message: "Project Created Successfully",
            project,
        });

    } catch (error) {
        console.log("Create project error:", error);
        return res.status(500).json({
            message: "Server Error"
        });
    }
}

module.exports = {
    createAdminProject,
};