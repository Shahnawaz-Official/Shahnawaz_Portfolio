const jwt = require("jsonwebtoken")

const authAdminmiddlewares = (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

         if (decoded.role !== "admin") {
            return res.status(403).json({
                message: "You don't have access to ADD Project "
            });
        }

        next()
    } catch (error) {
        console.log("Login Error ",error);  
        return res.status(401).json({ message: "Invalid Token" })
    }
}

module.exports = {
     authAdminmiddlewares
}