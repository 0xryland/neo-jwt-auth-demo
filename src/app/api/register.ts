// pages/api/register.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
// Assume db is your database instance
import db from '../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  try {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await db.connectToDatabase();
    const neo = db.getDb();

    // Store user in the database
    const user = await neo.users.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User created', userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
