const express = require("express")
const {authAdminmiddlewares} = require("../middlewares/authLogin.middleware")
const { hendleUploadCertificate } = require("../controller/createCertificate.controller")
const {handleDeleteCertificate} = require("../controller/deleteCertificate.controller")
const {handleAllCertificate}=require("../controller/getAllCertificate.controller")
const multer = require ("multer")

const router = express.Router()

const upload = multer({storage:multer.memoryStorage()})

router.post("/upload",authAdminmiddlewares,upload.single("image"),hendleUploadCertificate)
router.delete("/delete/:id",authAdminmiddlewares,handleDeleteCertificate)

router.get("/",handleAllCertificate)



module.exports = router