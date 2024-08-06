const {
  getAllJob_offers,
  getJob_offersById,
  createJob_offersById,
  updateJob_offersById,
  deleteJob_offersById,
} = require("../controllers/jop-offers");
const { Router } = require("express");
const jobOfferRouter = Router();
jobOfferRouter.get("/", getAllJob_offers);
jobOfferRouter.get("/:id", getJob_offersById);
jobOfferRouter.post("/", createJob_offersById);
jobOfferRouter.put("/:id", updateJob_offersById);
jobOfferRouter.delete("/:id", deleteJob_offersById);

module.exports = { jobOfferRouter };
