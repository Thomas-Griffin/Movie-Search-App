import {MovieSearchQueryParameters} from "./movieSearchQueryParameters";

export class MovieSearchRequest {
    private readonly _query: string;
    private readonly _include_adult: boolean;
    private readonly _primary_release_year: string;
    private readonly _page: number;
    private readonly _year: string;
    private readonly _language: string;
    private readonly _region: string;

    constructor(
        searchParameters: MovieSearchQueryParameters
    ) {
        this._query = searchParameters.query;
        this._include_adult = searchParameters.include_adult;
        this._language = searchParameters.language;
        this._primary_release_year = searchParameters.primary_release_year;
        this._page = searchParameters.page;
        this._region = searchParameters.region;
        this._year = searchParameters.year;
    }

    get language(): string | undefined {
        return this._language;
    }

    get page(): number | undefined {
        return this._page;
    }

    get region(): string | undefined {
        return this._region;
    }

    get query(): string | undefined {
        return this._query;
    }

    get includeAdult(): boolean | undefined {
        return this._include_adult;
    }

    get primaryReleaseYear(): string | undefined {
        return this._primary_release_year;
    }

    get year(): string | undefined {
        return this._year;
    }

    public toQueryString(): string {
        let params = []
        if (this.query !== '') {
            params.push(`query=${this.query}`)
        }
        if (this.language !== '') {
            params.push(`language=${this.language}`)
        }
        if (this.page) {
            params.push(`page=${this.page}`)
        }
        if (this.includeAdult) {
            params.push(`include_adult=${this.includeAdult}`)
        }
        if (this.region !== '') {
            params.push(`region=${this.region}`)
        }
        return params.join('&')
    }
}