const Certificate = require("../model/certificate.model")


async function handleAllCertificate(req,res){
            try {
                const certificate = await Certificate.find()
                res.status(200).json({
                    message:"Certificate Fatch Successfully",
                    certificate
                })
            } catch (error) {
                console.log("Certificate Fatce Error ",error);
                res.status(500).json({
                    message:"Certificate Fatch Server Error "
                })
                
            }
}


module.exports={
    handleAllCertificate
}