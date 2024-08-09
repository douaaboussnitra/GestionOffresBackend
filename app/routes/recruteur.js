import { getAllRecruteur, getRecruteurById, createRecruteur, updateRecruteur, deleteRecruteur } from "../controllers/recruteur.js";
import { Router } from "express";
const recruteurRouter = Router();
recruteurRouter.get("/", getAllRecruteur);
recruteurRouter.get("/:id", getRecruteurById);
recruteurRouter.post("/", createRecruteur);
recruteurRouter.put("/:id", updateRecruteur);
recruteurRouter.delete("/:id", deleteRecruteur);

export default  recruteurRouter
