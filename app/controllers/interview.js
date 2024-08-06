const { prisma } = require('../config/prismaClient');
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}
module.exports = {
  getAllInterview: async (req, res) => {
    try {
      const interview = await prisma.interview.findMany();
      //const result = await pool.query('SELECT * FROM candidat');
      res.json(interview);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getInterviewById: async (req, res) => {
    try {
      const { id } = req.params;
      const interview = await prisma.interview.findUnique({
        where: { id: parseInt(id) }
      })
      if (!interview) {
        return res.status(404).json({ error: 'interview non trouvé' });
      }
      res.json(interview);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createInterview: async (req, res) => {   
    try {
      const { location, meeting_link, application_id } = req.body;
      const interview = await prisma.interview.create({
        data: {
            location,
          meeting_link,
          application_id
          
        }
      })
      res.status(201).json(interview);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateInterview: async (req, res) => {
    try {
      const { id } = req.params;
      const { location, meeting_link, application_id } = req.body;
      const updatedIinterview = await prisma.interview.update({
        where: { id: parseInt(id) },
        data: {
            location,
          meeting_link,
          application_id
          
        }
      })
      res.json(updatedIinterviewt);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteInterview: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.interview.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'interview non trouvé' });
      }
      res.status(500).json({ error: error.message });
    }
  }
}