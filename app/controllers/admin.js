import prisma from'../config/prismaClient.js';
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}

/*model Admin {
  id       Int    @id @default(autoincrement())
  username String
  email    String
  password String
  roleId   Int
  Role     Role   @relation("AdminRole", fields: [roleId], references: [id])
  User     User?  @relation("UserAdmin")
} */

export const getAllAdmin= async (req, res) => {
    try {
      const admin = await prisma.admin.findMany();
      //const result = await pool.query('SELECT * FROM validation');
      res.json(admin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const getAdminById= async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await prisma.admin.findUnique({
        where: { id: parseInt(id) }
      })
      if (!admin) {
        return res.status(404).json({ error: 'Admin non trouvé' });
      }
      res.json(admin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const createAdmin= async (req, res) => {   
    try {
      const { username, email, result,roleId } = req.body;
      const admin = await prisma.admin.create({
        data: {
          username,
          email,
          result,
          roleId
        }
      })
      res.status(201).json(admin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const updateAdmin= async (req, res) => {
    try {
      const { id } = req.params;
      const { username, email, result,roleId  } = req.body;
      const updatedAdmin = await prisma.admin.update({
        where: { id: parseInt(id) },
        data: {
          username,
          email,
          result,
          roleId
        }
      })
      res.json(updatedAdmin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const deleteAdmin= async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.admin.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'admin non trouvé' });
      }
      res.status(500).json({ error: error.message });
    }
  }
