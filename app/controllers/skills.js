import prisma from '../config/prismaClient.js';
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}


/* model Skills {
  id          Int      @id @default(autoincrement())
  name        String
  categoryId  Int
  category    Category @relation(fields: [categoryId], references: [id])
  candidats   Candidat[] @relation("CandidatSkills")
} */

/* export const getAllSkills= async (req, res) => {
    try {
      const skillss = await prisma.skills.findMany();
      //const result = await pool.query('SELECT * FROM skills');
      res.status(200).json(skillss);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } */
  export const getSkillsById= async (req, res) => {
    try {
      const { id } = req.params;
      const skills = await prisma.skills.findUnique({
        where: { id: parseInt(id) }
      })
      if (!skills) {
        return res.status(404).json({ error: 'skills non trouvé' });
      }
      res.status(200).json(skills);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const createSkills= async (req, res) => {   
    try {
      const { name, categoryId } = req.body;
      const skills = await prisma.skills.create({
        data: {
            name,
            categoryId

        }
      })
      res.status(201).json(skills);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  export const updateSkills= async (req, res) => {
    try {
      const { id } = req.params;
      const { name, categoryId} = req.body;
      const updatedskills = await prisma.skills.update({
        where: { id: parseInt(id) },
        data: {
          name,
          categoryId
        }
      })
      res.status(200).json(updatedskills);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const deleteskills= async (req, res) => {
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
