const {
  getAllInterview,
  getInterviewById,
  createInterview,
  updateInterview,
  deleteInterview,
} = require("../controllers/interview");
const { Router } = require("express");

const interviewRouter = Router();
interviewRouter.get("/", getAllInterview);
interviewRouter.get("/:id", getInterviewById);
interviewRouter.post("/", createInterview);
interviewRouter.put("/:id", updateInterview);
interviewRouter.delete("/:id", deleteInterview);

module.exports = { interviewRouter };
