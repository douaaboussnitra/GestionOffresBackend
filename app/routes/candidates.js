const {
  getAllCandidat,
  getCandidatById,
  createCandidat,
  updateCandidat,
  deleteCandidat,
} = require("../controllers/candidates");
const { Router } = require("express");
const condidateRouter = Router();
condidateRouter.get("/", getAllCandidat);
condidateRouter.get("/:id", getCandidatById);
condidateRouter.post("/", createCandidat);
condidateRouter.put("/:id", updateCandidat);
condidateRouter.delete("/:id", deleteCandidat);
module.exports = { condidateRouter };
