const {
  getAllApplication,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
} = require("../controllers/application");
const { Router } = require("express");
const applicationRouter = Router();
applicationRouter.get("/", getAllApplication);
applicationRouter.get("/:id", getApplicationById);
applicationRouter.post("/", createApplication);
applicationRouter.put("/:id", updateApplication);
applicationRouter.delete("/:id", deleteApplication);

module.exports = { applicationRouter };
