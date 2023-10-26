import * as dotenv from 'dotenv'; dotenv.config();
import express from 'express';
import rateLimit from 'express-rate-limit';
import movieRoutes from './routes/movieRoutes';
import cacheMiddleware from "./cacheMiddleware";

const app = express();
const port = 8080;
const REQUESTS_PER_SECOND_LIMIT = 10;

const requestRateLimiter = rateLimit({
    limit: REQUESTS_PER_SECOND_LIMIT,
    windowMs: 1000,
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(requestRateLimiter); // Apply the rate limiter to all routes
app.use(cacheMiddleware);
app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use('/movies', movieRoutes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


export default app;

