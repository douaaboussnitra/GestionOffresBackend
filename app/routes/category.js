import { getAllCategory, getCategoryById, createCategory, updateCategory, deleteCategory } from '../controllers/Category_controller';
import { Router } from 'express';
const router = Router();
router.get('/', getAllCategory);
router.get('/:id', getCategoryById);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);
export default router;