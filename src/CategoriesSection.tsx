import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type Category = {
    name: string;
    images: string[];
};

const categories: Category[] = [
    {
        name: "Action",
        images: [
            "https://4kwallpapers.com/images/walls/thumbs_2t/25125.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/24975.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/24316.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/22561.jpg",
        ],
    },
    {
        name: "Adventure",
        images: [
            "https://4kwallpapers.com/images/walls/thumbs_2t/24737.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/23220.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/24524.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_3t/24612.jpg",
        ],
    },
    {
        name: "Comedy",
        images: [
            "https://4kwallpapers.com/images/walls/thumbs_2t/22077.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/20224.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/19415.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/17793.jpg",
        ],
    },
    {
        name: "Drama",
        images: [
            "https://4kwallpapers.com/images/walls/thumbs_2t/19489.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/19438.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/18429.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/17953.jpg",
        ],
    },
    {
        name: "Horror",
        images: [
            "https://4kwallpapers.com/images/walls/thumbs_2t/25446.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/24251.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/22942.jpg",
            "https://4kwallpapers.com/images/walls/thumbs_2t/22844.jpg",
        ],
    },
];

function CategoriesSection() {
    return (
        <section className="px-6 pt-20 text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-bold">
                        Explore our wide variety of categories
                    </h2>
                    <p className="mt-3 max-w-xl text-white/60">
                        Whether you’re looking for a comedy to make you laugh, a
                        drama to make you think, or a documentary to learn
                        something new
                    </p>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                    <button className="rounded-lg bg-white/10 p-3 hover:bg-white/20">
                        <FiArrowLeft />
                    </button>

                    <div className="flex gap-1 px-2">
                        <div className="h-1 w-6 rounded bg-red-500" />
                        <div className="h-1 w-6 rounded bg-white/20" />
                        <div className="h-1 w-6 rounded bg-white/20" />
                        <div className="h-1 w-6 rounded bg-white/20" />
                    </div>

                    <button className="rounded-lg bg-white/10 p-3 hover:bg-white/20">
                        <FiArrowRight />
                    </button>
                </div>
            </div>

            <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
                {categories.map((cat) => (
                    <div
                        key={cat.name}
                        className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.04]"
                    >
                        <div className="grid grid-cols-2 gap-3">
                            {cat.images.slice(0, 4).map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${cat.name} ${index + 1}`}
                                    className="h-28 w-full rounded-xl object-cover opacity-90 transition group-hover:opacity-100"
                                />
                            ))}
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <span className="font-medium">{cat.name}</span>
                            <FiArrowRight className="opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CategoriesSection;
