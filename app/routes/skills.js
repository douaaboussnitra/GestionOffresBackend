import { getAllSkills, getSkillsById, createSkills, updateSkills, deleteSkills } from '../controllers/Skills_controller';
import { Router } from 'express';
const router = Router();
router.get('/', getAllSkills);
router.get('/:id', getSkillsById);
router.post('/', createSkills);
router.put('/:id', updateSkills);
router.delete('/:id', deleteSkills);
export default router;