const cloudinary = require("cloudinary").v2;
const multer = require("multer");

//CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: "drc7f3qyj",
  api_key: "121948182853962",
  api_secret: "gnLaY6xaFoa4kIOmZzsNpnVfDCU",
});

//CREATE A STORAGE USING MULTER
const storage = new multer.memoryStorage();

//A FUNCTION WHICH WILL RETURN A RESULT
async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}
const upload = multer({ storage });
module.exports = { upload, imageUploadUtil };
