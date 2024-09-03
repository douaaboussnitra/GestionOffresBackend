import { getAllCandidat, getCandidatById, createCandidat, updateCandidat, deleteCandidat,getCandidatByJobId } from "../controllers/candidates.js";
import { Router } from "express";
const condidateRouter = Router();
condidateRouter.get("/", getAllCandidat);
condidateRouter.get("/:id", getCandidatById);
condidateRouter.post("/", createCandidat);
condidateRouter.put("/:id", updateCandidat);
condidateRouter.delete("/:id", deleteCandidat);
condidateRouter.get("/job/:id", getCandidatByJobId);
export default  condidateRouter 
