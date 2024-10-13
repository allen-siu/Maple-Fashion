import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './routes/auth';
import apiRouter from './routes/api';

dotenv.config({ path: path.join(__dirname, '../.env') })

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to mongoDB
mongoose.connect(process.env.DATABASE_URL || 'hello')
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => {console.log("Connected to Mongoose")});


// Display client static files
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

app.use(cors())

app.use('/api', apiRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});
