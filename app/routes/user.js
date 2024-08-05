import { getAllUser, getUserById, createUser, updateUser, deleteUser } from '../controllers/User_controller';
import { Router } from 'express';
const router = Router();
router.get('/', getAllUser);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
export default router;