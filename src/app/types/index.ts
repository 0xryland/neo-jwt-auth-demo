import { NextApiRequest } from 'next';
import { JwtPayload } from 'jsonwebtoken';

// Extend the NextApiRequest type to include the 'user' property
export interface NextApiRequestExtended extends NextApiRequest {
  user?: JwtPayload | string;
}
