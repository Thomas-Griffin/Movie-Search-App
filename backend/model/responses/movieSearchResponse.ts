export interface MovieSearchResponse {
    id: string;
    title: string;
    adult: boolean;
    backdrop_path: string;
    overview: string;
    popularity: number;
    genre_ids: number[];
    vote_average: number;
    vote_count: number;
    release_date: string;
}