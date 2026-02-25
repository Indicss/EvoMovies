import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import PlayerPage from "./Pages/PlayerPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/player/:id" element={<PlayerPage />} />
        </Routes>
    );
}
