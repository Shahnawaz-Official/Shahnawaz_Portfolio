const express = require("express");
const authAdminRoute = require("./routers/admin.router")
const cookieParser= require("cookie-parser")
const authProjectRoute = require("./routers/project.router")
const getAllRoute = require("./routers/allProject.router")
const app = express();


app.use(express.json())
app.use(cookieParser())

app.use("/api/admin",authAdminRoute)
app.use("/api/admin/project",authProjectRoute)
app.use("/api/project",getAllRoute)

module.exports = app