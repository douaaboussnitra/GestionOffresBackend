import  prisma  from '../config/prismaClient.js';
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}

/*model Application {
  id          Int          @id @default(autoincrement())
  candidateId Int
  jobOfferId  Int
  Candidat    Candidat     @relation(fields: [candidateId], references: [id])
  JobOffer    JobOffer     @relation(fields: [jobOfferId], references: [id])
  Interviews  Interview[]  @relation("ApplicationInterviews") // Added opposite relation field

  Interview Interview[]
} */


   export const  getAllApplication= async (req, res) => {
    try {
      const application = await prisma.application.findMany();
      //const result = await pool.query('SELECT * FROM candidat');
      res.status(200).json(application);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const getApplicationById= async (req, res) => {
    try {
      const { id } = req.params;
      const application = await prisma.application.findUnique({
        where: { id: parseInt(id) }
      })
      if (!application) {
        return res.status(404).json({ error: 'application non trouvé' });
      }
      res.status(200).json(application);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const createApplication=async (req, res) => {   
    try {
      const { candidateId, jobOfferId } = req.body;
      const application = await prisma.application.create({
        data: {
          candidateId,
          jobOfferId
        }
      })
      res.status(201).json(application);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const  updateApplication= async (req, res) => {
    try {
      const { id } = req.params;
      const { candidateId, jobOfferId } = req.body;
      const updateApplication = await prisma.application.update({
        where: { id: parseInt(id) },
        data: {
          candidateId,
          jobOfferId
        }
      })
      res.status(200).json(updateApplication);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const  deleteApplication= async (req, res) => {
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

