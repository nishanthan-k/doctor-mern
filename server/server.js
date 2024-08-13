import express from 'express';
import cors from 'cors';
import doctorRoutes from './routes/doctor.route.js';

const app = express();

app.use(cors());

app.use('/api/doctor', doctorRoutes);


app.listen(8080, () => {
  console.log('Server is connected on the port 8080');
})