import prisma from '../config/prismaClient.js';
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}

/*model Candidat {
  id          Int           @id @default(autoincrement())
  experience  String
  fullname    String
  email       String
  phone       String
  cv          String
  roleId      Int
  Role        Role          @relation("CandidatRole", fields: [roleId], references: [id])
  Application Application[]
  Validation  Validation?
  Interview   Interview[]   @relation("CandidatInterviews") // Added relation name
  skills      Skills[]      @relation("CandidatSkills")
  User        User?         @relation("UserCandidat")
}*/

export const getAllCandidat= async (req, res) => {
    try {
      const candidats = await prisma.candidat.findMany();
      //const result = await pool.query('SELECT * FROM candidat');
      res.status(200).json(candidats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const getCandidatById= async (req, res) => {
    try {
      const { id } = req.params;
      const candidat = await prisma.candidat.findUnique({
        where: { id: parseInt(id) }
      })
      if (!candidat) {
        return res.status(404).json({ error: 'Candidat non trouvé' });
      }
      res.status(200).json(candidat);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const createCandidat= async (req, res) => {   
    try {
      const { experience, fullname, email, phone , cv  , roleId } = req.body;
      const candidat = await prisma.candidat.create({
        data: {
          experience,
          fullname,
          email,
          phone,
          cv ,
          roleId
      
        }
      })
      res.status(201).json(candidat);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const updateCandidat= async (req, res) => {
    try {
      const { id } = req.params;
      const {experience, fullname, email, phone , cv  , roleId } = req.body;
      console.log(req.body);
      const updatedCandidat = await prisma.candidat.update({
        where: { id: parseInt(id) },
        data: {
          experience,
          fullname,
          email,
          phone,
          cv ,
          roleId
          }
      })
      res.status(200).json(updatedCandidat);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const deleteCandidat= async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.candidat.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Candidat non trouvé' });
      }
      res.status(500).json({ error: error.message });
    }
  }
