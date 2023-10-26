import {MovieSearchRequest} from "../model/requests/movieSearchRequest";
import {Movie} from "../model/movie/movie";
import {MovieServiceEndpoints} from "./movieServiceEndpoints";

export class MovieService {
    private URL: string = 'https://api.themoviedb.org/3/';
    private apiKey: string = process.env.TMDB_API_KEY ?? ''
    private authorisationHeader: string = `Bearer ${process.env.TMDB_AUTH_HEADER}`;

    async getMovies(searchRequest: MovieSearchRequest): Promise<Movie[]> {
        let query = `${this.URL}${MovieServiceEndpoints.searchMovies}?${searchRequest.toQueryString()}&api_key=${this.apiKey}`
        const response = await fetch(query, {method: 'GET', headers: {'accept': 'application/json', 'Authorization': this.authorisationHeader}})
        const responseJson = await response.json()
        if (responseJson?.results?.length && responseJson?.results?.length > 0) {
            const moviePromises = await responseJson.results?.map(async (movie: any) => await Movie.fromMovieSearchResponse(movie));
            const movies:Movie[] =  await Promise.all(moviePromises);
            return movies.map((movie: Movie) => movie.toJson());
        }
        return [];
    }

    async getMovieById(id: string): Promise<any> {
        const response = await fetch(`${this.URL}${MovieServiceEndpoints.movieDetails}/${id}?api_key=${this.apiKey}`, {method: 'GET', headers: {'accept': 'application/json', 'Authorization': this.authorisationHeader},})
        return await response.json();
    }
}