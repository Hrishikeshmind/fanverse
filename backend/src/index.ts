import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';
import mainRouter from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(ClerkExpressWithAuth());

// Routes
app.use('/api', mainRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});