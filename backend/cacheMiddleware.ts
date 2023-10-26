import {Request, Response, NextFunction} from 'express';
import NodeCache from 'node-cache';

const cache = new NodeCache();

const cacheMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const cachedData = cache.get(request.originalUrl);
    if (cachedData) {
        console.log('Returning cached data for ' + request.originalUrl);
        return response.status(200).json(cachedData);
    }
    next();
};

cacheMiddleware.set = (key: string, data: any) => {
    cache.set(key, data, 60 * 60 * 24);
}

export default cacheMiddleware;
