import {Movie} from "../model/movie/movie";
import {Request, Response} from "express";
import {MovieSearchRequest} from "../model/requests/movieSearchRequest";
import {MovieService} from "../services/movieService";
import {MovieSearchQueryParameters} from "../model/requests/movieSearchQueryParameters";
import cacheMiddleware from "../cacheMiddleware";

const router = require('express').Router();
const movieService: MovieService = new MovieService();


router.get('/search', cacheMiddleware, async (request: Request, response: Response) => {
    const queryParameters: MovieSearchQueryParameters = {
        query: request.query.query as string ?? '',
        language: request.query.language as string ?? '',
        page: parseInt(request.query.page as string) ?? undefined,
        include_adult: parseBoolean(request.query.include_adult as string) ?? false,
        region: request.query.region as string ?? '',
        year: request.query.year as string ?? '',
        primary_release_year: request.query.primary_release_year as string ?? '',
    }

    const movies: Movie[] = await movieService.getMovies(new MovieSearchRequest(queryParameters));
    cacheMiddleware.set(request.originalUrl, movies);
    return response.status(200).json(movies);
});

router.get('/:id', cacheMiddleware, async (request: Request, response: Response) => {
    const {id} = request.params;
    const movie: any = await movieService.getMovieById(id);
    cacheMiddleware.set(request.originalUrl, movie);
    if (movie?.success === false) {
        return response.status(404).json(movie);
    }
    return response.status(200).json(movie);
});


const parseBoolean = (token: string) => token === 'true';

export default router;
