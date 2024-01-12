// lib/verifyToken.ts

import { NextApiResponse, NextApiHandler } from 'next';
import jwt from 'jsonwebtoken';
import { NextApiRequestExtended } from '../types'; // Import the custom type

const verifyToken = (handler: NextApiHandler) => 
  async (req: NextApiRequestExtended, res: NextApiResponse) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
      const decoded = jwt.verify(token, 'secretsecretsecretsecretsecret'); // Replace w/ .env ref
      req.user = decoded;
      return handler(req, res);
    } catch (ex) {
      res.status(400).json({ message: 'Invalid token.' });
    }
  };

export default verifyToken;
