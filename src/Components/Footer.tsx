import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

const footerColumns = [
    {
        title: "Home",
        links: ["Categories", "Devices", "Pricing", "FAQ"],
    },
    {
        title: "Movies",
        links: ["Genres", "Trending", "New Release", "Popular"],
    },
    {
        title: "Shows",
        links: ["Genres", "Trending", "New Release", "Popular"],
    },
    {
        title: "Support",
        links: ["Contact Us"],
    },
    {
        title: "Subscription",
        links: ["Plans", "Features"],
    },
];

function Footer() {
    return (
        <footer className="bg-black px-6 pt-20 pb-10 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
                    {footerColumns.map((col) => (
                        <div key={col.title}>
                            <h4 className="text-lg font-semibold">
                                {col.title}
                            </h4>

                            <ul className="mt-6 space-y-4 text-white/55">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="transition hover:text-white hover:opacity-100"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-semibold">
                            Connect With Us
                        </h4>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="#"
                                className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-white/80 hover:bg-white/[0.06] hover:text-white"
                                aria-label="Facebook"
                            >
                                <FiFacebook />
                            </a>
                            <a
                                href="#"
                                className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-white/80 hover:bg-white/[0.06] hover:text-white"
                                aria-label="Twitter"
                            >
                                <FiTwitter />
                            </a>
                            <a
                                href="#"
                                className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-white/80 hover:bg-white/[0.06] hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10" />

                <div className="mt-8 flex flex-col gap-4 text-white/45 md:flex-row md:items-center md:justify-between">
                    <span>©2026 EvoMovies, All Rights Reserved</span>

                    <div className="flex flex-wrap items-center gap-4">
                        <a href="#" className="hover:text-white">
                            Terms of Use
                        </a>
                        <span className="text-white/20">|</span>
                        <a href="#" className="hover:text-white">
                            Privacy Policy
                        </a>
                        <span className="text-white/20">|</span>
                        <a href="#" className="hover:text-white">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
