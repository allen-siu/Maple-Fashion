import express from 'express';
import changingRoomRouter from './routes/changing-room-router';


const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api", changingRoomRouter);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))