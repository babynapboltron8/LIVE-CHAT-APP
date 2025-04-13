import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js';
import cookieparser from 'cookie-parser';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieparser());

app.use('/api/auth', authRoutes);

app.listen(5008, () => {
  console.log('server is running on PORT:' + PORT);
  connectDB();
});
