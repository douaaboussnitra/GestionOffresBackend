const {
  getAllRole,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} = require("../controllers/role");
const { Router } = require("express");
const roleRouter = Router();
roleRouter.get("/", getAllRole);
roleRouter.get("/:id", getRoleById);
roleRouter.post("/", createRole);
roleRouter.put("/:id", updateRole);
roleRouter.delete("/:id", deleteRole);

module.exports = { roleRouter };
