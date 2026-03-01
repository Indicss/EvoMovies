import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {
    GENRES,
    MovieCard,
    useDebouncedSearch,
    type Movie,
} from "../features/movies";

export default function MoviesPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [searchTerm, setSearchTerm] = useDebouncedSearch("search");
    const genre = searchParams.get("genre") || "All";
    const sort =
        (searchParams.get("sort") as "Popular" | "Newest") || "Popular";

    const [movies, setMovies] = useState<Movie[]>([]);

    const updateFilters = (key: string, value: string) => {
        setSearchParams(
            (prev) => {
                if (value && value !== "All") {
                    prev.set(key, value);
                } else {
                    prev.delete(key);
                }
                return prev;
            },
            { replace: true },
        );
    };

    const retrieveMovies = (
        search?: string | undefined,
        genre?: string | undefined,
        sort?: string | undefined,
    ): void => {
        const baseUrl = "http://localhost:5047/api/movies";
        const params = new URLSearchParams();

        if (search) params.append("search", search);
        if (genre && genre !== "All") params.append("genre", genre);
        if (sort) params.append("sort", sort);

        const finalUrl =
            params.size > 0 ? `${baseUrl}?${params.toString()}` : baseUrl;

        fetch(finalUrl)
            .then((response) => response.json())
            .then((data) => {
                const movies = data.map(
                    (movie: {
                        id: string;
                        title: string;
                        releaseDate: string | Date;
                        genre: string;
                        poster: string;
                        url: string;
                        director: string;
                    }) =>
                        ({
                            id: movie.id,
                            title: movie.title,
                            year: new Date(movie.releaseDate).getFullYear(),
                            genre: movie.genre,
                            rating: 8.2,
                            poster: movie.poster,
                            video: movie.url,
                            director: movie.director,
                        }) as Movie,
                );

                setMovies(movies);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        const search = searchParams.get("search") || "";
        retrieveMovies(search, genre, sort);
    }, [searchParams, genre, sort]);

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main className="px-6 pb-24 pt-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight">
                                Movies
                            </h1>
                            <p className="mt-3 max-w-2xl text-white/55">
                                Browse our collection. Search, filter by genre,
                                and pick something to watch.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur">
                                <FiSearch className="text-white/60" />
                                <input
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    placeholder="Search movies..."
                                    className="w-64 bg-transparent text-sm outline-none placeholder:text-white/35"
                                />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur">
                                <select
                                    value={genre}
                                    onChange={(e) =>
                                        updateFilters("genre", e.target.value)
                                    }
                                    className="bg-transparent text-sm outline-none"
                                >
                                    {GENRES.map((g) => (
                                        <option
                                            key={g}
                                            value={g}
                                            className="bg-black"
                                        >
                                            {g}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur">
                                <select
                                    value={sort}
                                    onChange={(e) =>
                                        updateFilters("sort", e.target.value)
                                    }
                                    className="bg-transparent text-sm outline-none"
                                >
                                    <option
                                        value="Popular"
                                        className="bg-black"
                                    >
                                        Popular
                                    </option>
                                    <option value="Newest" className="bg-black">
                                        Newest
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 h-px w-full bg-white/10" />

                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {movies.map((m) => (
                            <MovieCard key={m.id} movie={m} />
                        ))}
                    </div>

                    {movies.length === 0 && (
                        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-white/60">
                            No movies found. Try another search or genre.1
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
