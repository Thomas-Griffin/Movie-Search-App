import {Request, Response, NextFunction} from 'express';
import NodeCache from 'node-cache';

const cache = new NodeCache();

const cacheMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const cachedData = cache.get(request.url);
    if (cachedData) {
        return response.json(cachedData);
    }
    next();
};

export default cacheMiddleware;
