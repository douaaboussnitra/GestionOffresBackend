import prisma from '../config/prismaClient.js';
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}


/*model JobOffer {
  id               Int         @id @default(autoincrement())
  title            String
  description      String
  requirement      String
  location         String
  salary           String
  postedBy         Int
  type_de_contrat  String
  niveau_hierarchique String
  recruteur        Recruteur   @relation(fields: [postedBy], references: [id])
  applications     Application[]
}*/
export const getAllJob_offers = async (req, res) => {
    try {
      const job_offers = await prisma.jobOffer.findMany();
      console.log(job_offers)
      //const result = await pool.query('SELECT * FROM candidat');
      res.status(200).json(job_offers );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  export const getAllJob_offers_rec  = async (req, res) => {
    try {
      const id =req.params.id;
      const job_offers = await prisma.jobOffer.findMany({
        where: {
          postedBy: parseInt(id)
          }
      });
      console.log(job_offers)
      //const result = await pool.query('SELECT * FROM candidat');
      res.status(200).json(job_offers );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const getAllSkills= async (req, res) => {
    try {
      const skillss = await prisma.jobOffer.findMany();
      res.status(200).json(skillss.map((e) => { return e.skills}))
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const getJob_offersById= async (req, res) => {
    try {
      const { id } = req.params;
      const job_offers  = await prisma.jobOffer.findUnique({
        where: { id: parseInt(id) }
      })
      if (!job_offers ) {
        return res.status(404).json({ error: 'job_offers  non trouvé' });
      }
      res.status(200).json(job_offers );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
 
export const createJob_offersById  = async (req, res) => {
  try {
    const { title, description, requirements, location, salary, companyName, postedBy, contractType, hierarchyLevel, email, skills } = req.body;

    // Create job offer and link skills
    const jobOffer = await prisma.jobOffer.create({
      data: {
        title,
        description,
        requirements:"",
        location,
        salary,
        companyName,
        postedBy,
        contractType,
        hierarchyLevel,
        email,
        skills
      }
    });

    res.status(201).json(jobOffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export const updateJob_offersById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, requirements, location, salary, companyName, postedBy, contractType, hierarchyLevel, email, skills} = req.body;

    const updatedJobOffer = await prisma.jobOffer.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        requirements:"",
        location,
        salary,
        companyName,
        postedBy:2,
        contractType,
        hierarchyLevel,
        email,
        skills
      }
    });

    res.status(200).json(updatedJobOffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
  export const deleteJob_offersById= async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.jobOffer.delete({
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

  export const searchJobOffers = async (req, res) => {
    try {
      const { contractType, skill } = req.query;
  
      const filters = {
        where: {
          contractType: contractType || undefined,
          skills: {
            contains: skill || '',
          } 
        }
      };
  
      const job_offers = await prisma.jobOffer.findMany(filters);
      res.status(200).json(job_offers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  