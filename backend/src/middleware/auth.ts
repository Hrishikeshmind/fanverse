import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { RequestHandler } from 'express';

export const requireAuth = ClerkExpressRequireAuth() as unknown as RequestHandler; 