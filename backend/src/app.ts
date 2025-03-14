import express from 'express';
import cors from 'cors';
import { AppDataSource } from './data-source';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// Инициализация DataSource
AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log('Database connection error:', error);
  });

// Маршруты
app.use('/api/users', userRoutes);

export default app;