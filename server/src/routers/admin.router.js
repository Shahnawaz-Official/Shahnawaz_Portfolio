const express = require("express")
const {adminLogin,adminLoguot} = require("../controller/authLogin.controller")

const router = express.Router();

router.post("/login",adminLogin)

router.post("/logout",adminLoguot)


 // is ko hta na hei project router me rakhana hei 

// cartificate  => is ko duste router me rakhana hei
// delete project and cartificate  /delete/:id

// uptate karna project go put  /api/projects/:id

//get all


module.exports = router