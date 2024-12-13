const express = require("express");
const router = express.Router();
const { createWallpaper } = require("../controller/image");
const upload = require("../utils/uploader");


router.post("/upload", upload.single("image"), createWallpaper);

module.exports = router;
