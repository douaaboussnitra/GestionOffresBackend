import { getAllApplication, getApplicationById, createApplication, updateApplication, deleteApplication } from "../controllers/application";
import { Router } from "express";
const applicationRouter = Router();
applicationRouter.get("/", getAllApplication);
applicationRouter.get("/:id", getApplicationById);
applicationRouter.post("/", createApplication);
applicationRouter.put("/:id", updateApplication);
applicationRouter.delete("/:id", deleteApplication);

export default { applicationRouter };
