import { getAllSkills, getSkillsById, createSkills, updateSkills, deleteskills } from "../controllers/skills";
import { Router } from "express";
const skillRouter = Router();
skillRouter.get("/", getAllSkills);
skillRouter.get("/:id", getSkillsById);
skillRouter.post("/", createSkills);
skillRouter.put("/:id", updateSkills);
skillRouter.delete("/:id", deleteskills);

export default { skillRouter };
