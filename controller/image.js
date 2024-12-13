const cloudinary = require("../utils/cloudinary");

const createWallpaper = async (req, res) => {
    try {
      const file = req.file;
  
      const responseURL = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "images" }, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          })
          .end(file.buffer);
      });
  
      console.log("responseURL", responseURL.secure_url);
  
      return res.status(200).json({
        message: "image created successfully",
        success: true,
        data: responseURL.secure_url,
      });
    } catch (error) {
      console.log("Error creating wallpaper:", error.message);
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = { createWallpaper };