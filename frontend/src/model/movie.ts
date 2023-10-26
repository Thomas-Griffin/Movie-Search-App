export interface Movie {
    id: string
    title: string
    isAdultRated: boolean
    posterURL: string
    synopsis: string
    popularity: number
    genres: string[]
    releaseDate: string
    rating: number
    ratingCount: number
}