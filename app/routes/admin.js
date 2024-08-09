import { getAllAdmin, getAdminById, createAdmin, updateAdmin, deleteAdmin } from "../controllers/admin.js";
import { Router } from "express";
const adminRouter = Router();
adminRouter.get("/", getAllAdmin);
adminRouter.get("/:id", getAdminById);
adminRouter.post("/", createAdmin);
adminRouter.put("/:id", updateAdmin);
adminRouter.delete("/:id", deleteAdmin);

export default  adminRouter
