const express = require("express")
const { getAllproject } = require("../controller/getAllProject.controller")
const router = express.Router()


router.get("/",getAllproject)

module.exports = router