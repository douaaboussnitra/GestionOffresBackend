const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.default = prisma;
module.exports = prisma;