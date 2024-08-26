import prisma from'../config/prismaClient.js';
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}

/*model Recruteur {
  id          Int          @id @default(autoincrement())
  name        String
  email       String
  phone       String
  description String?
  postal_code String
  logo        String?
  sector      String
  city        String
  website     String
  job_offer   JobOffer[]
  roleId      Int
  Role        Role         @relation("RecruteurRole", fields: [roleId], references: [id])
  User        User?        @relation("UserRecruteur")
  Validations Validation[] 
} */

export const getAllRecruteur= async (req, res) => {
    try {
      const recruteur = await prisma.recruteur.findMany();
      //const result = await pool.query('SELECT * FROM validation');
      res.status(200).json(recruteur);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const getRecruteurById= async (req, res) => {
    try {
      const { id } = req.params;
      const recruteur = await prisma.recruteur.findUnique({
        where: { id: parseInt(id) }
      })
      if (!recruteur) {
        return res.status(404).json({ error: 'Recruteur non trouvé' });
      }
      res.status(200).json(recruteur);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const createRecruteur= async (req, res) => {   
    try {
      const { name, email, phone } = req.body;
      const recruteur = await prisma.recruteur.create({
        data: {
          name,
          email,
          phone
        }
      })
      res.status(201).json(recruteur);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const updateRecruteur= async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, phone } = req.body;
      const updatedRecruteur = await prisma.recruteur.update({
        where: { id: parseInt(id) },
        data: {
          name,
          email,
          phone
        }
      })
      res.status(200).json(updatedRecruteur);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const deleteRecruteur= async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.recruteur.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Recruteur non trouvé' });
      }
      res.status(500).json({ error: error.message });
    }
  }
