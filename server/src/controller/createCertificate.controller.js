const {uploadCertificateImage} = require("../services/storage.services")
const Certificate = require("../model/certificate.model")

async function hendleUploadCertificate(req, res) {
  try {
    const { name, title, shortDescription, description } = req.body;

    if (!name || !title || !shortDescription || !description) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Image is required"
      });
    }

    const result = await uploadCertificateImage(
      req.file.buffer.toString("base64")
    );

    const certificate = await Certificate.create({
      name,
      title,
      image: result.url,
      shortDescription,
      description,
    });

    res.status(201).json({
      message: "Certificate created successfully",
      certificate,
    });

  } catch (error) {
    console.log("Upload Certificate Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
}

module.exports = {
    hendleUploadCertificate
}