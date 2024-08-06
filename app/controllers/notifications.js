const { prisma } = require('../config/prismaClient');
// middleware (func) => return (req, res) => func(req,res).catch(next(error))
// middleware (error) => {error.codeStatus(500) -- > 200 --> 400 ->}
module.exports = {
  getAllNotifications: async (req, res) => {
    try {
      const notifications = await prisma.notifications.findMany();
      //const result = await pool.query('SELECT * FROM candidat');
      res.json(notifications);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getNotificationsById: async (req, res) => {
    try {
      const { id } = req.params;
      const notifications = await prisma.notifications.findUnique({
        where: { id: parseInt(id) }
      })
      if (!notifications) {
        return res.status(404).json({ error: 'notifications non trouvé' });
      }
      res.json(notifications);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createNotifications: async (req, res) => {   
    try {
      const { user_id, message, read } = req.body;
      const notifications = await prisma.notifications.create({
        data: {
            user_id,
            message,
            read
        }
      })
      res.status(201).json(notifications);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateNotifications: async (req, res) => {
    try {
      const { id } = req.params;
      const { user_id, message, read }= req.body;
      const updatedNotifications = await prisma.notifications.update({
        where: { id: parseInt(id) },
        data: {
            user_id,
            message,
            read
        }
      })
      res.json(updatedNotifications);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteNotifications: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.notifications.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).send();
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'notifications non trouvé' });
      }
      res.status(500).json({ error: error.message });
    }
  }
}