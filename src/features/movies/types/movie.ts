export type Movie = {
    id: string;
    title: string;
    year: number;
    genre: "Action" | "Adventure" | "Comedy" | "Drama" | "Horror";
    rating: number;
    poster: string;
    video: string;
    director: string;
};
