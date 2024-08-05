import { getAllJob_offers, getJob_offersById, createJob_offers, updateJob_offers, deleteJob_offers } from '../controllers/Joboffers_controller';
import { Router } from 'express';
const router = Router();
router.get('/', getAllJob_offers);
router.get('/:id', getJob_offersById);
router.post('/', createJob_offers);
router.put('/:id', updateJob_offers);
router.delete('/:id', deleteJob_offers);
export default router;