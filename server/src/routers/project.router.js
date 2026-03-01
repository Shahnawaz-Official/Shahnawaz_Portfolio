const express = require("express")
const {authAdminmiddlewares}= require("../middlewares/authLogin.middleware")
const multer = require("multer")
const {createAdminProject} = require("../controller/createProject.controller")
const { adminDeleteProject } = require("../controller/deleteProject.controller")

const router = express.Router()


const upload = multer({storage:multer.memoryStorage()})


router.post("/upload",authAdminmiddlewares,upload.single("image"),createAdminProject)
router.delete("/delete/:id",authAdminmiddlewares,adminDeleteProject)


module.exports = router