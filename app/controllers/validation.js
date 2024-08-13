import prisma from '../config/prismaClient.js';
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}

/*model Validation {
  id           Int       @id @default(autoincrement())
  candidatId   Int @unique
  validated_by Int
  result       String
  notification String
  candidat     Candidat  @relation(fields: [candidatId], references: [id])
  recruteur    Recruteur @relation(fields: [validated_by], references: [id])
}*/

export const getAllValidation= async (req, res) => {
    try {
      const validation = await prisma.validation.findMany();
      //const result = await pool.query('SELECT * FROM candidat');
      res.status(200).json(validation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const getValidationById= async (req, res) => {
    try {
      const { id } = req.params;
      const validation = await prisma.validation.findUnique({
        where: { id: parseInt(id) }
      })
      if (!validation) {
        return res.status(404).json({ error: 'validation non trouvé' });
      }
      res.status(200).json(validation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const createValidation= async (req, res) => {   
    try {
      const { user_id, validated_by,result, notification } = req.body;
      const validation = await prisma.validation.create({
        data: {
          user_id,
            validated_by,
            result,
            notification
        }
      })
      res.status(201).json(validation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const updateValidation= async (req, res) => {
    try {
      const { id } = req.params;
      const { user_id, validated_by,result, notification }= req.body;
      const updatedValidation= await prisma.validation.update({
        where: { id: parseInt(id) },
        data: {
            user_id,
            validated_by,
            result,
            notification

        }
      })
      res.status(200).json(updatedValidation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const deleteValidation= async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.validation.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'validation non trouvé' });
      }
      res.status(500).json({ error: error.message });
    }
  }
