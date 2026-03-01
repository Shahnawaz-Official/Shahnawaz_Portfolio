
const jwt = require("jsonwebtoken")

async function adminLogin(req, res) {
    const { email, password } = req.body;
    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({
            message: "Only Admin , YOU do Not try !"
        })
    }
    const token = jwt.sign(
        { role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );
    res.cookie("token", token)

    res.status(201).json({ message: "Admin Login Successfully" })
}


async function adminLoguot (req,res){
    res.clearCookie("token")
    res.status(200).json({
        message:"Admin Logged out successfully"
    })
}



module.exports = {
    adminLogin,
    adminLoguot
}