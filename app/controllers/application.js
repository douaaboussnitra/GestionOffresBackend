import  prisma  from '../config/prismaClient.js';

// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}

/*model Application {
  id          Int          @id @default(autoincrement())
  candidateId Int
  jobOfferId  Int
  fullName    String
  email       String
  phone       Int
  experience  String
  jobType     String
  Candidat    Candidat     @relation(fields: [candidateId], references: [id])
  JobOffer    JobOffer     @relation(fields: [jobOfferId], references: [id])
  Interviews  Interview[]  @relation("ApplicationInterviews") // Added opposite relation field

  Interview Interview[]
} */


   export const getAllApplication= async (req, res) => {
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
      console.log("application");
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

 // Create application with file uploads
export const createApplication = async (req, res) => {
  try {
    const { filecv, filemotiva, body } = req.files; // Access uploaded files
    console.log("body", req.body)
    console.log("files", req.files)
    const { fullName,email,phone,experience,jobType ,candidateId, jobOfferId} = req.body;
    console.log("fullName", fullName)
    
    // Save file paths
    const filecvPath = filecv ? filecv[0].path : '';
    const filemotivaPath = filemotiva ? filemotiva[0].path : '';

    const application = await prisma.application.create({
      data: {
        fullName,
        email,
        phone,
        experience,
        jobType,
        candidateId:Number(candidateId),
        jobOfferId:Number(jobOfferId),
        filecv: filecvPath,
        filemotiva: filemotivaPath
      }
    });
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update application with file uploads
export const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const { candidateId, jobOfferId,fullName,email,phone,experience,jobType } = req.body;
    const { filecv, filemotiva } = req.files; // Access uploaded files

    // Save file paths
    const filecvPath = filecv ? filecv[0].path : '';
    const filemotivaPath = filemotiva ? filemotiva[0].path : '';

    const updateApplication = await prisma.application.update({
      where: { id: parseInt(id) },
      data: {
        candidateId,
        jobOfferId,
        fullName,
        email,
        phone,
        experience,
        jobType,
        filecv: filecvPath,
        filemotiva: filemotivaPath
      }
    });
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

