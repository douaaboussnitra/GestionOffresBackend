import prisma from '../config/prismaClient.js';
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}

/*model Interview {
  id            Int         @id @default(autoincrement())
  applicationId Int
  location      String
  link_meet     String
  application   Application @relation(fields: [applicationId], references: [id])
  candidatId    Int       
  candidat      Candidat    @relation("CandidatInterviews", fields: [candidatId], references: [id]) 
  Application Application[] @relation("ApplicationInterviews")
}*/

export const getAllInterview= async (req, res) => {
    try {
      const interview = await prisma.interview.findMany();
      //const result = await pool.query('SELECT * FROM candidat');
      res.json(interview);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const getInterviewById= async (req, res) => {
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
  }
  export const createInterview= async (req, res) => {   
    try {
      const { applicationId, location, link_meet,candidatId } = req.body;
      const interview = await prisma.interview.create({
        data: {
          applicationId,
          location,
          link_meet,
          candidatId
        }
      })
      res.status(201).json(interview);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const updateInterview= async (req, res) => {
    try {
      const { id } = req.params;
      const { applicationId, location, link_meet,candidatId } = req.body;
      const updatedIinterview = await prisma.interview.update({
        where: { id: parseInt(id) },
        data: {
          applicationId,
          location,
          link_meet,
          candidatId
          
        }
      })
      res.json(updatedIinterviewt);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const deleteInterview= async (req, res) => {
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
