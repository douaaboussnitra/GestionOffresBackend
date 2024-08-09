import prisma from "../config/prismaClient.js";
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}


 /*model User {
  id          Int        @id @default(autoincrement())
  email       String     @unique
  password    String
  adminId     Int?       @unique
  recruteurId Int?       @unique
  candidatId  Int?       @unique
  roleId      Int?
  Admin       Admin?     @relation("UserAdmin", fields: [adminId], references: [id])
  Recruteur   Recruteur? @relation("UserRecruteur", fields: [recruteurId], references: [id])
  Candidat    Candidat?  @relation("UserCandidat", fields: [candidatId], references: [id])
  Role        Role?      @relation(fields: [roleId], references: [id])
}*/

export const getAllUser= async (req, res) => {
  try {
    const user = await prisma.user.findMany();
    //const result = await pool.query('SELECT * FROM user');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export const getUserById= async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) }
    })
    if (!user) {
      return res.status(404).json({ error: 'user non trouvé' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export const createUser= async (req, res) => {   
  try {
    const { name, categoryId } = req.body;
    const user = await prisma.user.create({
      data: {
          name,
          categoryId

      }
    })
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export const updateUser= async (req, res) => {
  try {
    const { id } = req.params;
    const { name, categoryId} = req.body;
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        name,
        categoryId
      }
    })
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const deleteUser= async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'User non trouvé' });
    }
    res.status(500).json({ error: error.message });
  }
}
