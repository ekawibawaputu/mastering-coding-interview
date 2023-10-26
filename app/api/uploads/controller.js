const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(403).json({ message: "No file upload available" }); //
    }

    res.status(201).json({
      message: "Success   uploading image",
      data: { src: `/uploads/${req.file.filename}` },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { uploadImage };
