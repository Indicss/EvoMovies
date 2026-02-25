import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { GENRES, MovieCard, type Movie } from "../features/movies";

export default function MoviesPage() {
    const [query, setQuery] = useState("");
    const [genre, setGenre] = useState<(typeof GENRES)[number]>("All");
    const [sort, setSort] = useState<"Popular" | "Newest">("Popular");

    /*const filtered = useMemo(() => {
        let list = [...MOVIES];

        if (genre !== "All") list = list.filter((m) => m.genre === genre);

        const q = query.trim().toLowerCase();
        if (q) list = list.filter((m) => m.title.toLowerCase().includes(q));

        if (sort === "Newest") list.sort((a, b) => b.year - a.year);
        else list.sort((a, b) => b.rating - a.rating);

        return list;
    }, [query, genre, sort]);*/

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetch("http://localhost:5047/api/movies")
            .then((response) => response.json())
            .then((data) => {
                const movies = data.map(
                    (movie: any) =>
                        ({
                            id: movie.id,
                            title: movie.title,
                            year: new Date(movie.releaseDate).getFullYear(),
                            genre: movie.genre,
                            rating: 8.2,
                            poster: "https://4kwallpapers.com/images/walls/thumbs_2t/25125.jpg",
                            video: "https://www.w3schools.com/html/mov_bbb.mp4",
                        }) as Movie,
                );

                setMovies(movies);
            })
            .catch((error) => console.log(error));
    }, []);

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
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search movies..."
                                    className="w-64 bg-transparent text-sm outline-none placeholder:text-white/35"
                                />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur">
                                <select
                                    value={genre}
                                    onChange={(e) =>
                                        setGenre(e.target.value as any)
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
                                        setSort(e.target.value as any)
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
                            No movies found. Try another search or genre.
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
