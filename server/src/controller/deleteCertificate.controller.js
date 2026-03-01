const Certificate = require("../model/certificate.model")


async function handleDeleteCertificate(req,res){
    const {id} = req.params;
    try {
        const certificate = await Certificate.findByIdAndDelete(id)
        if(!certificate){
            return res.status(401).json({
                message:"Certificate Not found !"
            })
        }

        res.status(200).json({
            message:"Certificate Deleted Successfully"
        })
    } catch (error) {
        console.log("Delete Certificate Error ",error);
        res.status(500).json({
            message:"Server Error "
        })
        
    }
}
module.exports={
    handleDeleteCertificate
}