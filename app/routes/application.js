import { getAllApplication, getApplicationById, createApplication, updateApplication, deleteApplication } from '../controllers/application_controller';
import { Router } from 'express';
const router = Router();
router.get('/', getAllApplication);
router.get('/:id', getApplicationById);
router.post('/', createApplication);
router.put('/:id', updateApplication);
router.delete('/:id', deleteApplication);
export default router;