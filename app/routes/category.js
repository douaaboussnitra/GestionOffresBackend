import { getAllCategory, getCategoryById, createCategory, updateCategory, deleteCategory } from "../controllers/category";
import { Router } from "express";

const categoryRouter = Router();
categoryRouter.get("/", getAllCategory);
categoryRouter.get("/:id", getCategoryById);
categoryRouter.post("/", createCategory);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);

export default { categoryRouter };
