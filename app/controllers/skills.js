const { pool, prisma } = require('../config/db');
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}
module.exports = {
  getAllSkills: async (req, res) => {
    try {
      const skillss = await prisma.skills.findMany();
      //const result = await pool.query('SELECT * FROM skills');
      res.json(skillss);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getSkillsById: async (req, res) => {
    try {
      const { id } = req.params;
      const skills = await prisma.skills.findUnique({
        where: { id: parseInt(id) }
      })
      if (!skills) {
        return res.status(404).json({ error: 'skills non trouvé' });
      }
      res.json(skills);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createSkills: async (req, res) => {   
    try {
      const { name, description, category_id } = req.body;
      const skills = await prisma.skills.create({
        data: {
            name,
          nom,
          description,
          category_id
          
        }
      })
      res.status(201).json(skills);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },


 



  updateSkills: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, category_id } = req.body;
      const updatedskills = await prisma.skills.update({
        where: { id: parseInt(id) },
        data: {
            name,
          nom,
          description,
          category_id
          
        }
      })
      res.json(updatedskills);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteskills: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.skills.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'skills non trouvé' });
      }
      res.status(500).json({ error: error.message });
    }
  }
}