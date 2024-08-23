import { getAllApplication, getApplicationById, createApplication, updateApplication, deleteApplication } from "../controllers/application.js";
import { Router } from "express";
import upload from '../middlewares/multer.js';
const applicationRouter = Router();
applicationRouter.get("/", getAllApplication);
applicationRouter.get("/:id", getApplicationById);
applicationRouter.post('/', upload.fields([{ name: 'filecv', maxCount: 1 }, { name: 'filemotiva', maxCount: 1 }]), createApplication);
applicationRouter.put('/:id', upload.fields([{ name: 'filecv', maxCount: 1 }, { name: 'filemotiva', maxCount: 1 }]), updateApplication);
applicationRouter.delete("/:id", deleteApplication);

export default  applicationRouter 

