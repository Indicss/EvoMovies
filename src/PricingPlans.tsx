import { useMemo, useState } from "react";

type Billing = "monthly" | "yearly";

type Plan = {
    name: string;
    desc: string;
    monthly: number;
    yearly: number;
};

const plans: Plan[] = [
    {
        name: "Basic Plan",
        desc: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        monthly: 9.99,
        yearly: 99.99,
    },
    {
        name: "Standard Plan",
        desc: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        monthly: 12.99,
        yearly: 129.99,
    },
    {
        name: "Premium Plan",
        desc: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
        monthly: 14.99,
        yearly: 149.99,
    },
];

function PricingPlans() {
    const [billing, setBilling] = useState<Billing>("monthly");

    const priceLabel = useMemo(() => {
        return billing === "monthly" ? "/month" : "/year";
    }, [billing]);

    return (
        <section className="bg-black px-6 pt-12 pb-24 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div>
                        <h2 className="text-4xl font-semibold tracking-tight">
                            Choose the plan that’s right for you
                        </h2>
                        <p className="mt-3 max-w-3xl text-white/55">
                            Join EvoMovies and select from our flexible
                            subscription options tailored to suit your viewing
                            preferences. Get ready for non-stop entertainment!
                        </p>
                    </div>

                    <div className="w-fit rounded-xl border border-white/10 bg-white/[0.03] p-2">
                        <div className="flex gap-2">
                            <button
                                onClick={() => setBilling("monthly")}
                                className={[
                                    "rounded-lg px-6 py-3 text-sm font-medium transition",
                                    billing === "monthly"
                                        ? "bg-white/10 text-white"
                                        : "text-white/60 hover:text-white",
                                ].join(" ")}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBilling("yearly")}
                                className={[
                                    "rounded-lg px-6 py-3 text-sm font-medium transition",
                                    billing === "yearly"
                                        ? "bg-white/10 text-white"
                                        : "text-white/60 hover:text-white",
                                ].join(" ")}
                            >
                                Yearly
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {plans.map((p) => {
                        const price =
                            billing === "monthly" ? p.monthly : p.yearly;

                        return (
                            <div
                                key={p.name}
                                className="
                  rounded-2xl border border-white/10 bg-white/[0.02]
                  p-10 backdrop-blur
                  transition hover:border-white/20
                "
                            >
                                <h3 className="text-2xl font-semibold">
                                    {p.name}
                                </h3>
                                <p className="mt-4 text-white/55 leading-7">
                                    {p.desc}
                                </p>

                                <div className="mt-10 flex items-end gap-2">
                                    <span className="text-5xl font-semibold">
                                        ${price.toFixed(2)}
                                    </span>
                                    <span className="pb-2 text-white/60">
                                        {priceLabel}
                                    </span>
                                </div>

                                <div className="mt-10 flex gap-4">
                                    <button className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 font-medium hover:bg-white/[0.06]">
                                        Start Free Trial
                                    </button>
                                    <button className="flex-1 rounded-xl bg-red-600 px-6 py-4 font-semibold hover:bg-red-500">
                                        Choose Plan
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default PricingPlans;
