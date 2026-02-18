import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiStar } from "react-icons/fi";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

type Genre = "All" | "Action" | "Adventure" | "Comedy" | "Drama" | "Horror";
type SortType = "Popular" | "Newest";

type Movie = {
    id: string;
    title: string;
    year: number;
    genre: Exclude<Genre, "All">;
    rating: number;
    poster: string;
    video: string;
};

const MOVIES: Movie[] = [
    {
        id: "m1",
        title: "Crimson Run",
        year: 2024,
        genre: "Action",
        rating: 8.2,
        poster: "https://4kwallpapers.com/images/walls/thumbs_2t/25125.jpg",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: "m2",
        title: "Skybound",
        year: 2023,
        genre: "Adventure",
        rating: 7.6,
        poster: "https://4kwallpapers.com/images/walls/thumbs_2t/24737.jpg",
        video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
        id: "m3",
        title: "Laugh Riot",
        year: 2022,
        genre: "Comedy",
        rating: 7.1,
        poster: "https://4kwallpapers.com/images/walls/thumbs_2t/22077.jpg",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: "m4",
        title: "Silent Verdict",
        year: 2021,
        genre: "Drama",
        rating: 8.0,
        poster: "https://4kwallpapers.com/images/walls/thumbs_2t/19489.jpg",
        video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
        id: "m5",
        title: "Night Shift",
        year: 2020,
        genre: "Horror",
        rating: 7.8,
        poster: "https://4kwallpapers.com/images/walls/thumbs_2t/25446.jpg",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
];

const GENRES: Genre[] = [
    "All",
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Horror",
];
const SORTS: SortType[] = ["Popular", "Newest"];

function MovieCard({ movie }: { movie: Movie }) {
    return (
        <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur transition hover:border-white/20 hover:bg-white/[0.04]">
            <div className="relative">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="h-72 w-full object-cover opacity-95 transition group-hover:opacity-100"
                    loading="lazy"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur">
                    <FiStar className="text-red-500" />
                    <span className="text-sm font-semibold">
                        {movie.rating.toFixed(1)}
                    </span>
                </div>
            </div>

            <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-lg font-semibold">{movie.title}</h3>
                        <p className="mt-1 text-sm text-white/55">
                            {movie.genre} • {movie.year}
                        </p>
                    </div>

                    <Link to={`/player/${movie.id}`}>
                        <button className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-500">
                            Play
                        </button>
                    </Link>
                </div>

                <div className="mt-4 h-px w-full bg-red-600/0 transition group-hover:bg-red-600/30" />
            </div>
        </div>
    );
}

export default function MoviesPage() {
    const [query, setQuery] = useState<string>("");
    const [genre, setGenre] = useState<Genre>("All");
    const [sort, setSort] = useState<SortType>("Popular");

    const filtered = useMemo(() => {
        let list = [...MOVIES];

        if (genre !== "All") {
            list = list.filter((m) => m.genre === genre);
        }

        const q = query.trim().toLowerCase();
        if (q) {
            list = list.filter((m) => m.title.toLowerCase().includes(q));
        }

        if (sort === "Newest") {
            list.sort((a, b) => b.year - a.year);
        } else {
            list.sort((a, b) => b.rating - a.rating);
        }

        return list;
    }, [query, genre, sort]);

    const handleGenreChange = (value: string) => {
        if ((GENRES as readonly string[]).includes(value)) {
            setGenre(value as Genre);
        }
    };

    const handleSortChange = (value: string) => {
        if ((SORTS as readonly string[]).includes(value)) {
            setSort(value as SortType);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main className="px-6 pt-10 pb-24">
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
                                        handleGenreChange(e.target.value)
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
                                        handleSortChange(e.target.value)
                                    }
                                    className="bg-transparent text-sm outline-none"
                                >
                                    {SORTS.map((s) => (
                                        <option
                                            key={s}
                                            value={s}
                                            className="bg-black"
                                        >
                                            {s}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 h-px w-full bg-white/10" />

                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {filtered.map((m) => (
                            <MovieCard key={m.id} movie={m} />
                        ))}
                    </div>

                    {filtered.length === 0 && (
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
