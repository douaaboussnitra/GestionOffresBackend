import { prisma } from '../config/prismaClient';
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}
module.exports = {
  getAllCategory: async (req, res) => {
    try {
      const category = await prisma.category.findMany();
      //const result = await pool.query('SELECT * FROM candidat');
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await prisma.category.findUnique({
        where: { id: parseInt(id) }
      })
      if (!category) {
        return res.status(404).json({ error: 'category non trouvé' });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createCategory: async (req, res) => {   
    try {
      const { name, job_offers, skills} = req.body;
      const category = await prisma.category.create({
        data: {
            name,
            job_offers,
            skills
        }
      })
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, job_offers, skills} = req.body;
      const updateCategory = await prisma.category.update({
        data: {
            name,
            job_offers,
            skills
        }
      })
      res.json(updateCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.category.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'category non trouvé' });
      }
      res.status(500).json({ error: error.message });
    }
  }
}