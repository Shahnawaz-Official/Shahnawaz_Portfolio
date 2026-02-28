const express = require("express");
const authAdminRoute = require("./routers/admin.router")
const cookieParser= require("cookie-parser")
const app = express();


app.use(express.json())
app.use(cookieParser())

app.use("/api/admin",authAdminRoute)

module.exports = app