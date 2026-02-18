import Navbar from "../Components/Navbar";
import CategoriesSection from "../CategoriesSection";
import CrossPlatform from "../CrossPlatform";
import FrequentlyAskedQuestions from "../FrequentlyAskedQuestions";
import PricingPlans from "../PricingPlans";
import FreeTrialCTA from "../FreeTrialCTA";
import Footer from "../Components/Footer";

export default function HomePage() {
    return (
        <div className="bg-black text-white">
            <section
                className="relative h-[700px] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'url("https://assets.aboutamazon.com/2d/49/abd3719b41aea4605bb51e4d8d72/subs-pre-order-consent-background-image-cb578173463.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black" />

                <div className="relative z-10">
                    <Navbar />

                    <div className="mx-auto flex h-[600px] max-w-6xl flex-col items-center justify-center px-6 text-center">
                        <h1 className="text-5xl font-bold">
                            The Best Streaming Experience
                        </h1>

                        <p className="mt-6 max-w-2xl text-white/70">
                            EvoMovies is the best streaming experience for
                            watching your favorite movies and shows anytime,
                            anywhere.
                        </p>

                        <button className="mt-10 rounded-xl bg-red-600 px-8 py-4 font-semibold hover:bg-red-500">
                            ▶ Start Watching Now
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-black pt-10 pb-0">
                <CategoriesSection />
            </section>

            <CrossPlatform />
            <FrequentlyAskedQuestions />
            <PricingPlans />
            <FreeTrialCTA />
            <Footer />
        </div>
    );
}
