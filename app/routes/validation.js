import { getAllValidation, getValidationById, createValidation, updateValidation, deleteValidation } from "../controllers/validation";
import { Router } from "express";
const router = Router();
router.get("/", getAllValidation);
router.get("/:id", getValidationById);
router.post("/", createValidation);
router.put("/:id", updateValidation);
router.delete("/:id", deleteValidation);

export default { router };
