import { getAllUser, getUserById, createUser, updateUser, deleteUser } from "../controllers/user";
import { Router } from "express";
const userRouter = Router();
userRouter.get("/", getAllUser);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default { userRouter };
