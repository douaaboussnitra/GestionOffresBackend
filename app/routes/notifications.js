import { getAllNotifications, getNotificationsById, createNotifications, updateNotifications, deleteNotifications } from "../controllers/notifications";
import { Router } from "express";
const notificationRouter = Router();
notificationRouter.get("/", getAllNotifications);
notificationRouter.get("/:id", getNotificationsById);
notificationRouter.post("/", createNotifications);
notificationRouter.put("/:id", updateNotifications);
notificationRouter.delete("/:id", deleteNotifications);

export default { notificationRouter };
