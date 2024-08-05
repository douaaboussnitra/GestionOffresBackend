const { pool, prisma } = require('../config/db');
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}
module.exports = {
  getAllRole: async (req, res) => {
    try {
      const role = await prisma.role.findMany();
      //const result = await pool.query('SELECT * FROM candidat');
      res.json(role);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getRoletById: async (req, res) => {
    try {
      const { id } = req.params;
      const role = await prisma.role.findUnique({
        where: { id: parseInt(id) }
      })
      if (!role) {
        return res.status(404).json({ error: 'role non trouvé' });
      }
      res.json(role);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createRole: async (req, res) => {   
    try {
      const { name, description } = req.body;
      const role = await prisma.role.create({
        data: {
          name,
          description
        }
      })
      res.status(201).json(role);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateRole: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description }= req.body;
      const updatedRole = await prisma.role.update({
        where: { id: parseInt(id) },
        data: {
            name,
            description
          }
      })
      res.json(updatedRole);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteRole: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.role.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'role non trouvé' });
      }
      res.status(500).json({ error: error.message });
    }
  }
}