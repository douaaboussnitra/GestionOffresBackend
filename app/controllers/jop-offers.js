import { prisma } from '../config/prismaClient';
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}
module.exports = {
  getAllJob_offers : async (req, res) => {
    try {
      const job_offers = await prisma.job_offers .findMany();
      //const result = await pool.query('SELECT * FROM candidat');
      res.json(job_offers );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getJob_offersById: async (req, res) => {
    try {
      const { id } = req.params;
      const job_offers  = await prisma.job_offers.findUnique({
        where: { id: parseInt(id) }
      })
      if (!job_offers ) {
        return res.status(404).json({ error: 'job_offers  non trouvé' });
      }
      res.json(job_offers );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createJob_offersById: async (req, res) => {   
    try {
      const { title, description, requirement, location , salary  , posted_by, category_id } = req.body;
      const job_offers  = await prisma.job_offers .create({
        data: {
            title,
          nom,
          description,
          requirement,
          location ,
          salary,
          posted_by,
          category_id
        }
      })
      res.status(201).json(job_offers );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateJob_offersById: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, requirement, location , salary  , posted_by, category_id } = req.body;
      const updatedJob_offersById = await prisma.job_offers .update({
        where: { id: parseInt(id) },
        data: {
            title,
          nom,
          description,
          requirement,
          location ,
          salary,
          posted_by,
          category_id
        }
      })
      res.json(updatedJob_offersById);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteJob_offersById: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.job_offers .delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'job_offers  non trouvé' });
      }
      res.status(500).json({ error: error.message });
    }
  }
}