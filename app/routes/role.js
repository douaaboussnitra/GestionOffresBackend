import { getAllRole, getRoleById, createRole, updateRole, deleteRole } from '../controllers/Role_controller';
import { Router } from 'express';
const router = Router();
router.get('/', getAllRole);
router.get('/:id', getRoleById);
router.post('/', createRole);
router.put('/:id', updateRole);
router.delete('/:id', deleteRole);
export default router;