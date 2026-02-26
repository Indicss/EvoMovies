import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

type ApiMovie = {
  id: string;
  title: string;
  url: string; 
  poster: string;
  releaseDate: string;
  genre: string;
  director: string;
};

function getYoutubeEmbed(url: string) {
  if (!url) return null;

  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  return null;
}

export default function PlayerPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<ApiMovie | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setNotFound(false);

    fetch(`http://localhost:5047/api/movies/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("NotFound");
        return r.json();
      })
      .then((data) => {
        setMovie(data);
        setNotFound(false);
      })
      .catch(() => {
        setMovie(null);
        setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const youtube = useMemo(() => {
    if (!movie) return null;
    return getYoutubeEmbed(movie.url);
  }, [movie]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="mx-auto max-w-5xl px-6 py-16 text-white/60">
          Loading...
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !movie) {
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

      <main className="px-6 pb-24 pt-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-3xl font-semibold">{movie.title}</h1>

            <button
              onClick={() => navigate("/movies")}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm hover:bg-white/[0.06]"
            >
              ← Back
            </button>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            {youtube ? (
              <iframe
                className="aspect-video w-full"
                src={youtube}
                title={movie.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video controls autoPlay className="w-full" src={movie.url} />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}