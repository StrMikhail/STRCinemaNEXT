export interface FilmList {
    pagesCount: number;
    films: FilmItem[]
} 
export interface FilmItem {
    filmId: number;
    nameRu: string;
    nameEn: string;
    year: string;
    filmLength: string;
    countries: Country[];
    genres: Genre[],
    rating: string;
    ratingVoteCount: number,
    posterUrl: string;
    posterUrlPreview: string;
    ratingChange: null;
}

export interface Country {
    country: string;
}

export interface Genre {
    genre: string;
}
