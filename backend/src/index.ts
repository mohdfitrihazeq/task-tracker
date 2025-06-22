import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/tasks';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
