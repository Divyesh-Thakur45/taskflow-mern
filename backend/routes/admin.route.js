const express = require("express");
const CheckAdmin = require("../middlewares/checkadmin.middleware");
const upload = require("../middlewares/multer.middleware");
const { CreateProductController } = require("../controllers/admin.controller");

const adminRouter = express.Router();

adminRouter.post(
  "/createproduct",
  CheckAdmin,
  upload.single("image"),
  CreateProductController,
);

module.exports = adminRouter;
