import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import DbConnection from './dbConnection.js';
import UserRouter from './routes/userRoutes.js';


const app = express();
dotenv.config({ path: "./config/.env" });

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"||process.env.CORS_URL,
    credentials: true
}));

app.use("/api/user",UserRouter);

app.listen(port, () => {
    DbConnection(),
    console.log(`Server is running at http://localhost:${port}`)
});
