import {
    FiSmartphone,
    FiTablet,
    FiMonitor,
    FiBox,
    FiHeadphones,
} from "react-icons/fi";

type DeviceCard = {
    title: string;
    desc: string;
    icon: React.ReactNode;
};

const devices: DeviceCard[] = [
    {
        title: "Smartphones",
        desc: "EvoMovies is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        icon: <FiSmartphone size={22} />,
    },
    {
        title: "Tablet",
        desc: "EvoMovies is optimized for both Android and iOS tablets. Download our app from the Google Play Store or the Apple App Store",
        icon: <FiTablet size={22} />,
    },
    {
        title: "Smart TV",
        desc: "EvoMovies is optimized for Smart TVs. Enjoy streaming on big screens with high quality playback",
        icon: <FiMonitor size={22} />,
    },
    {
        title: "Laptops",
        desc: "EvoMovies works perfectly on laptops through modern browsers and desktop apps",
        icon: <FiMonitor size={22} />,
    },
    {
        title: "Gaming Consoles",
        desc: "EvoMovies is available on modern gaming consoles for a full living room experience",
        icon: <FiBox size={22} />,
    },
    {
        title: "VR Headsets",
        desc: "EvoMovies is exploring immersive VR streaming experiences for supported headsets",
        icon: <FiHeadphones size={22} />,
    },
];

function CrossPlatform() {
    return (
        <section className="bg-black px-6 pt-5 pb-24 text-white">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-4xl font-semibold tracking-tight">
                    We Provide you streaming experience across various devices.
                </h2>

                <p className="mt-4 max-w-5xl text-white/55">
                    With EvoMovies, you can enjoy your favorite movies and TV
                    shows anytime, anywhere. Our platform is designed to be
                    compatible with a wide range of devices, ensuring that you
                    never miss a moment of entertainment.
                </p>

                <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {devices.map((device) => (
                        <div
                            key={device.title}
                            className="
                relative overflow-hidden rounded-2xl
                border border-white/10 bg-white/[0.02]
                p-8 backdrop-blur
                transition hover:border-white/20
              "
                        >
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,0,0,0.18),transparent_55%)]" />

                            <div className="relative z-10 flex items-center gap-5">
                                <div className="grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-white/[0.03]">
                                    <span className="text-red-500">
                                        {device.icon}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-semibold">
                                    {device.title}
                                </h3>
                            </div>

                            <p className="relative z-10 mt-6 text-white/55 leading-7">
                                {device.desc}
                            </p>

                            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CrossPlatform;
