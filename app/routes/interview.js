import { getAllInterview, getInterviewById, createInterview, updateInterview, deleteInterview } from "../controllers/interview";
import { Router } from "express";

const interviewRouter = Router();
interviewRouter.get("/", getAllInterview);
interviewRouter.get("/:id", getInterviewById);
interviewRouter.post("/", createInterview);
interviewRouter.put("/:id", updateInterview);
interviewRouter.delete("/:id", deleteInterview);

export default { interviewRouter };
