import { getAllNotifications, getNotificationsById, createNotifications, updateNotifications, deleteNotifications } from '../controllers/Notifications_controller';
import { Router } from 'express';
const router = Router();
router.get('/', getAllNotifications);
router.get('/:id', getNotificationsById);
router.post('/', createNotifications);
router.put('/:id', updateNotifications);
router.delete('/:id', deleteNotifications);
export default router;