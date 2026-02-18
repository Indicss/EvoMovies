import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const links = [
        { label: "Home", path: "/" },
        { label: "Movies", path: "/movies" },
        { label: "Support", path: "/support" },
        { label: "Subscriptions", path: "/subscriptions" },
    ];

    return (
        <header className="relative z-20">
            <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
                <Link to="/" className="text-xl font-bold">
                    EvoMovies
                </Link>

                <nav className="hidden sm:block">
                    <ul className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur">
                        {links.map((link) => {
                            const isActive = location.pathname === link.path;

                            return (
                                <li key={link.label}>
                                    <Link
                                        to={link.path}
                                        className={`
                      block rounded-xl px-4 py-2 text-sm transition
                      ${
                          isActive
                              ? "bg-white/10 text-white"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                      }
                    `}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <button className="rounded-xl border border-white/10 bg-black/40 p-3 text-white/90 backdrop-blur transition hover:bg-white/10">
                    <FiSearch size={18} />
                </button>
            </div>
        </header>
    );
}

export default Navbar;
