const {
  getAllValidation,
  getValidationById,
  createValidation,
  updateValidation,
  deleteValidation,
} = require("../controllers/validation");
const { Router } = require("express");
const router = Router();
router.get("/", getAllValidation);
router.get("/:id", getValidationById);
router.post("/", createValidation);
router.put("/:id", updateValidation);
router.delete("/:id", deleteValidation);

module.exports = { router };
