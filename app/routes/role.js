import { getAllRole, getRoleById, createRole, updateRole, deleteRole } from "../controllers/role.js";
import { Router } from "express";
const roleRouter = Router();
roleRouter.get("/", getAllRole);
roleRouter.get("/:id", getRoleById);
roleRouter.post("/", createRole);
roleRouter.put("/:id", updateRole);
roleRouter.delete("/:id", deleteRole);

export default  roleRouter 
