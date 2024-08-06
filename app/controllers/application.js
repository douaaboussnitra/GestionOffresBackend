const createApplication = require('express/lib/express');
const { prisma } = require('../config/prismaClient');
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}
module.exports = {
  getAllApplication: async (req, res) => {
    try {
      const application = await prisma.application.findMany();
      //const result = await pool.query('SELECT * FROM candidat');
      res.json(application);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getApplicationById: async (req, res) => {
    try {
      const { id } = req.params;
      const application = await prisma.application.findUnique({
        where: { id: parseInt(id) }
      })
      if (!application) {
        return res.status(404).json({ error: 'application non trouvé' });
      }
      res.json(application);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createApplication: async (req, res) => {   
    try {
      const { candidate_id, job_offer_id } = req.body;
      const application = await prisma.application.create({
        data: {
            candidate_id,
            job_offer_id
        }
      })
      res.status(201).json(application);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateApplication: async (req, res) => {
    try {
      const { id } = req.params;
      const { candidate_id, job_offer_id } = req.body;
      const updateApplication = await prisma.application.update({
        where: { id: parseInt(id) },
        data: {
            candidate_id,
            job_offer_id
        }
      })
      res.json(updateApplication);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteApplication: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.application.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'application non trouvé' });
      }
      res.status(500).json({ error: error.message });
    }
  }
}

