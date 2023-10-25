export class MovieGenre {
    private readonly _id: number;

    constructor(id: number, name: string | undefined = undefined) {
        this._id = id;
        this._name = name;
    }

    private _name: string | undefined;

    get name(): string | undefined {
        return this._name;
    }

    set name(name: string | undefined) {
        this._name = name;
    }

    get id(): number {
        return this._id;
    }


    async resolveName(language: string = 'en-US'): Promise<void>{
        if (this._name) return
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}&language=${language}`)
        const responseJson: any = await response.json()
        const genres:any[] = responseJson?.genres
        this._name = genres?.find((genre: any) => genre?.id === this._id)?.name || ''
    }
}