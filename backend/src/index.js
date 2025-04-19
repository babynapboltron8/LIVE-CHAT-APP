import express from 'express';
import dotenv from 'dotenv';
import cookieparser from 'cookie-parser';

import { connectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieparser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);

app.listen(5008, () => {
  console.log('server is running on PORT:' + PORT);
  connectDB();
});
