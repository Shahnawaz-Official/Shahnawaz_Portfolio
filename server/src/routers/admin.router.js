const express = require("express")
const {adminLogin} = require("../controller/authLogin.controller")
const { authAdminmiddlewares}= require("../middlewares/authLogin.middleware")
const multer = require("multer")
const {createAdminProject} = require("../controller/createProject.controller")

const router = express.Router();

const upload = multer({storage:multer.memoryStorage()})


router.post("/login",adminLogin)
router.post("/upload/project",authAdminmiddlewares,upload.single("image"),createAdminProject) // is ko hta na hei project router me rakhana hei 

// cartificate  => is ko duste router me rakhana hei
// delete project and cartificate  /delete/:id

// uptate karna project go put  /api/projects/:id

//get all


module.exports = router