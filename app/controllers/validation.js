import { prisma } from'../config/prismaClient';
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}

export const getAllValidation= async (req, res) => {
    try {
      const validations = await prisma.validation.findMany();
      //const result = await pool.query('SELECT * FROM validation');
      res.json(validations);
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
      res.json(validation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const createValidation= async (req, res) => {   
    try {
      const { candidate_id, validated_by, result } = req.body;
      const validation = await prisma.validation.create({
        data: {
            candidate_id,
            validated_by,
            result
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
      const { candidate_id, validated_by, result } = req.body;
      const updatedvalidation = await prisma.validation.update({
        where: { id: parseInt(id) },
        data: {
            candidate_id,
            validated_by,
            result
        }
      })
      res.json(updatedvalidation);
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
