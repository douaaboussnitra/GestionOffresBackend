const {
  getAllSkills,
  getSkillsById,
  createSkills,
  updateSkills,
  deleteskills,
} = require("../controllers/skills");
const { Router } = require("express");
const skillRouter = Router();
skillRouter.get("/", getAllSkills);
skillRouter.get("/:id", getSkillsById);
skillRouter.post("/", createSkills);
skillRouter.put("/:id", updateSkills);
skillRouter.delete("/:id", deleteskills);

module.exports = { skillRouter };
