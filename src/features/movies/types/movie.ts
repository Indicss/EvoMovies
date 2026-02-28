export type Movie = {
    id: string;
    title: string;
    year: number;
    genre:
        | "Action"
        | "Adventure"
        | "Comedy"
        | "Drama"
        | "Horror"
        | "Romance"
        | "SciFi"
        | "Thriller"
        | "Other";
    rating: number;
    poster: string;
    video: string;
    director: string;
};
