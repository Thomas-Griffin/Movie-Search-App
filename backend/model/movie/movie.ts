import {MovieSearchResponse} from "../responses/movieSearchResponse";
import {MovieGenre} from "./movieGenre";

export class Movie {
    private readonly _id: string;
    private readonly _title: string;
    private readonly _isAdultRated: boolean;
    private readonly _posterURL: string;
    private readonly _synopsis: string;
    private readonly _popularity: number | string;
    private readonly _genres: (string | undefined)[];
    private readonly _releaseDate: string;
    private readonly _rating: number;
    private readonly _ratingCount: number;

    constructor(
        id: string,
        title: string,
        isAdultRated: boolean,
        posterURL: string,
        synopsis: string,
        popularity: number | string,
        genres: (string | undefined)[],
        rating: number,
        ratingCount: number,
        releaseDate: string
    ) {
        this._id = id;
        this._title = title;
        this._isAdultRated = isAdultRated;
        this._posterURL = posterURL;
        this._synopsis = synopsis;
        this._popularity = popularity;
        this._genres = genres;
        this._releaseDate = releaseDate;
        this._rating = rating;
        this._ratingCount = ratingCount;

    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get isAdultRated(): boolean {
        return this._isAdultRated;
    }

    get posterURL(): string {
        return this._posterURL;
    }

    get synopsis(): string {
        return this._synopsis;
    }

    get popularity(): number | string {
        return this._popularity;
    }

    get genres(): (string | undefined)[] {
        return this._genres;
    }

    get releaseDate(): string {
        return this._releaseDate;
    }

    get rating(): number {
        return this._rating;
    }

    get ratingCount(): number {
        return this._ratingCount;
    }

    public static async fromMovieSearchResponse(response: MovieSearchResponse): Promise<Movie> {
        const genres: Awaited<MovieGenre[]> = await Promise.all(response?.genre_ids?.map((id: number) => new MovieGenre(id)))
        await Promise.all(genres.map(async (genre: MovieGenre) => await genre.resolveName()))
        return new Movie(
            response.id,
            response.title,
            response.adult,
            response.backdrop_path === null ? 'https://via.placeholder.com/500x500?text=No+Poster+Available' : `https://image.tmdb.org/t/p/original/${response.backdrop_path}`,
            response.overview,
            response.popularity,
            genres?.map((movieGenre: MovieGenre) => movieGenre.name) ?? [],
            response.vote_average,
            response.vote_count,
            response.release_date
        )
    }

    public toJson(): any {
        return {
            id: this._id,
            title: this._title,
            isAdultRated: this._isAdultRated,
            posterURL: this._posterURL,
            synopsis: this._synopsis,
            popularity: this._popularity,
            genres: this._genres,
            releaseDate: this._releaseDate,
            rating: this._rating,
            ratingCount: this._ratingCount,
        }
    }
}