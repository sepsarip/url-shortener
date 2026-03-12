import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import urlroutes from './routes/url.routes.js';
import errorHandler from './middleware/error.handler.js';

const app = express();
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

app.use('/api', urlroutes);

app.use(errorHandler);

export default app;
