const {
  getAllNotifications,
  getNotificationsById,
  createNotifications,
  updateNotifications,
  deleteNotifications,
} = require("../controllers/notifications");
const { Router } = require("express");
const notificationRouter = Router();
notificationRouter.get("/", getAllNotifications);
notificationRouter.get("/:id", getNotificationsById);
notificationRouter.post("/", createNotifications);
notificationRouter.put("/:id", updateNotifications);
notificationRouter.delete("/:id", deleteNotifications);

module.exports = { notificationRouter };
