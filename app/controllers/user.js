const { prisma } = require("../config/prismaClient");
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}
module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      console.log("users : ", users);
      //const result = await pool.query('SELECT * FROM user');
      res.json(users);
    } catch (error) {
      console.log("errir : ", error);
      res.status(500).json({ error: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
      });
      if (!user) {
        return res.status(404).json({ error: "user non trouvé" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createUser: async (req, res) => {
    try {
      const { user_name, password, email, id_role } = req.body;
      const user = await prisma.user.create({
        data: {
          user_name,
          password,
          email,
          id_role,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { user_name, password, email, id_role } = req.body;
      const updateduser = await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
          user_name,
          password,
          email,
          id_role,
        },
      });
      res.json(updateduser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.user.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      if (error.code === "P2025") {
        return res.status(404).json({ error: "user non trouvé" });
      }
      res.status(500).json({ error: error.message });
    }
  },
};
