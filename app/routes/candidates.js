import { getAllCandidat, getCandidatById, createCandidat, updateCandidat, deleteCandidat } from '../controllers/candidat_controller';
import { Router } from 'express';
const router = Router();
router.get('/', getAllCandidat);
router.get('/:id', getCandidatById);
router.post('/', createCandidat);
router.put('/:id', updateCandidat);
router.delete('/:id', deleteCandidat);
export default router;