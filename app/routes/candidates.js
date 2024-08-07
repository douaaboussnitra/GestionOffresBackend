import { getAllCandidat, getCandidatById, createCandidat, updateCandidat, deleteCandidat } from "../controllers/candidates";
import { Router } from "express";
const condidateRouter = Router();
condidateRouter.get("/", getAllCandidat);
condidateRouter.get("/:id", getCandidatById);
condidateRouter.post("/", createCandidat);
condidateRouter.put("/:id", updateCandidat);
condidateRouter.delete("/:id", deleteCandidat);
export default { condidateRouter };
