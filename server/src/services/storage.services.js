const { ImageKit } = require("@imagekit/nodejs");

const imageKitClient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadProjectImage(file) {
    const result = await imageKitClient.files.upload({
        file: file,
        fileName: "project_image_" + Date.now(),
        folder: "portfolio-Backend/images"
    });

    return result;
}

module.exports = { uploadProjectImage };