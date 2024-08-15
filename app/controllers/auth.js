import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";
import prisma from '../config/prismaClient.js';

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

    const token = jwt.sign({ id: user.id, role: user.role }, "secretkey", {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Database error", error: err });
  }
};

export const register = async (req, res) => {
  try {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 16);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Database error", error: err });
  }
};