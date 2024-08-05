import prisma from '../config/prismaClient';
export const createValidation = async (data) => {
  return await prisma.validation.create({
    data,
  });
};
