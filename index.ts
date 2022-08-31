import cors from 'cors';
import express from 'express';
import router from './routes/routes.js';


const app = express();
app.use(cors());

app.use(router)

const PORT: number = 5000

app.listen(PORT, () => console.log( `Server is on the port: ${PORT}`));