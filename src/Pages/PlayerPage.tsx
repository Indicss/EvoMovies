import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

type Movie = {
    id: string;
    title: string;
    video: string;
};

const MOVIES: Movie[] = [
    {
        id: "m1",
        title: "Crimson Run",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: "m2",
        title: "Skybound",
        video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
        id: "m3",
        title: "Laugh Riot",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: "m4",
        title: "Silent Verdict",
        video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
        id: "m5",
        title: "Night Shift",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
];

export default function PlayerPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const movie = useMemo(() => MOVIES.find((m) => m.id === id), [id]);

    if (!movie) {
        return (
            <div className="min-h-screen bg-black text-white">
                <Navbar />
                <div className="mx-auto max-w-5xl px-6 py-16">
                    <h1 className="text-3xl font-semibold">Movie not found</h1>
                    <button
                        onClick={() => navigate("/movies")}
                        className="mt-8 rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-500"
                    >
                        Back to Movies
                    </button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <main className="px-6 pt-10 pb-24">
                <div className="mx-auto max-w-6xl">
                    <div className="flex items-center justify-between gap-4">
                        <h1 className="text-3xl font-semibold">
                            {movie.title}
                        </h1>

                        <button
                            onClick={() => navigate("/movies")}
                            className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm hover:bg-white/[0.06]"
                        >
                            ← Back
                        </button>
                    </div>

                    <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                        <video
                            controls
                            autoPlay
                            className="w-full"
                            src={movie.video}
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
