import { getAllInterview, getInterviewById, createInterview, updateInterview, deleteInterview } from '../controllers/Interview_controller';
import { Router } from 'express';
const router = Router();
router.get('/', getAllInterview);
router.get('/:id', getInterviewById);
router.post('/', createInterview);
router.put('/:id', updateInterview);
router.delete('/:id', deleteInterview);
export default router;