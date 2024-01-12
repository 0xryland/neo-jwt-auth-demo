// pages/api/securedata.ts

import type { NextApiResponse } from 'next';
import verifyToken from '../lib/verifyToken';
import { NextApiRequestExtended } from '../types'; 

const handler = async (req: NextApiRequestExtended, res: NextApiResponse) => {
  // Now you can access req.user
  if (req.user) {
    // Your secure logic here
    res.status(200).json({ message: 'Access to secured data granted' });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default verifyToken(handler);
