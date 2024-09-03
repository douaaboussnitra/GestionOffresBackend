import { getAllJob_offers, getJob_offersById, getAllSkills, createJob_offersById, updateJob_offersById, deleteJob_offersById,searchJobOffers } from "../controllers/jop-offers.js";
import { Router } from "express";

const jobOfferRouter = Router();

jobOfferRouter.get("/:id", getJob_offersById);
jobOfferRouter.get("/", getAllJob_offers);
jobOfferRouter.post("/", createJob_offersById);
jobOfferRouter.put("/:id", updateJob_offersById);
jobOfferRouter.delete("/:id", deleteJob_offersById);
jobOfferRouter.get("/skills/all", getAllSkills);
jobOfferRouter.get("/search/job", searchJobOffers); 

export default jobOfferRouter;
