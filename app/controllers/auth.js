import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";
import prisma from '../config/prismaClient.js';
const secret = process.env.JWT_SECRET;

export const login = async (req, res) => {
  try {
  const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    let id ;
    switch (user.roleId) {
      case 1:
        const recruteurs = await prisma.recruteur.findMany({
          where: {
            email 
          },
        });
        
        if (recruteurs.length > 0) {
          const firstRecruteur = recruteurs[0];
          id = firstRecruteur.id;
        } else {
          id = null;
        }
        break;

        case 2:
          const candidat = await prisma.candidat.findMany({
            where: {
              email 
            },
          });
          
          if (candidat.length > 0) {
            const firstCandidat = candidat[0];
            id = firstCandidat.id;
          } else {
            id = null;
          }
          break;
      default:
        break;
    }

    const token = jwt.sign({ id, email: user.email , role:user.roleId}, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Database error", error: err });
  }
};

export const register = async (req, res) => {
  try {
  const { username, email, password , role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 16);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        roleId  : role
      },
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Database error", error: err });
  }
};