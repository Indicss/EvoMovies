import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

import type { Movie } from "../types";

interface MovieCardProps {
    movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => (
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
                    <p className="mt-1 text-xs text-white/40">
  Director: {movie.director}
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
