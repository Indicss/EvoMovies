function FreeTrialCTA() {
    return (
        <section className="bg-black px-6 pt-10 pb-24 text-white">
            <div className="mx-auto max-w-7xl">
                <div
                    className="
            relative overflow-hidden rounded-2xl
            border border-white/10
            min-h-[220px] md:min-h-[260px]
          "
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                'url("https://assets.aboutamazon.com/2d/49/abd3719b41aea4605bb51e4d8d72/subs-pre-order-consent-background-image-cb578173463.jpg")',
                        }}
                    />

                    <div className="absolute inset-0 bg-black/55" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(255,0,0,0.25),transparent_55%)]" />

                    <div className="relative z-10 flex flex-col gap-10 px-10 py-14 md:flex-row md:items-center md:justify-between md:px-16 md:py-16">
                        <div className="max-w-3xl">
                            <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">
                                Start your free trial today!
                            </h3>
                            <p className="mt-5 max-w-2xl text-white/55 leading-7">
                                This is a clear and concise call to action that
                                encourages users to sign up for a free trial of
                                EvoMovies.
                            </p>
                        </div>

                        <button className="w-fit rounded-xl bg-red-600 px-10 py-4 font-semibold hover:bg-red-500">
                            Start a Free Trial
                        </button>
                    </div>

                    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]" />
                </div>
            </div>
        </section>
    );
}

export default FreeTrialCTA;
