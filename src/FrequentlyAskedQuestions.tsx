import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

type FAQ = {
    id: number;
    question: string;
    answer: string;
};

const faqs: FAQ[] = [
    {
        id: 1,
        question: "What is EvoMovies?",
        answer: "EvoMovies is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
        id: 2,
        question: "How much does EvoMovies cost?",
        answer: "EvoMovies offers multiple subscription plans depending on your streaming needs.",
    },
    {
        id: 3,
        question: "What content is available on EvoMovies?",
        answer: "You can watch movies, TV shows, documentaries and exclusive originals.",
    },
    {
        id: 4,
        question: "How can I watch EvoMovies?",
        answer: "EvoMovies is available on mobile, tablets, smart TVs and desktop browsers.",
    },
    {
        id: 5,
        question: "How do I sign up for EvoMovies?",
        answer: "You can sign up directly on our website by creating an account.",
    },
    {
        id: 6,
        question: "What is the EvoMovies free trial?",
        answer: "New users may receive a limited free trial depending on region.",
    },
    {
        id: 7,
        question: "How do I contact EvoMovies customer support?",
        answer: "You can contact us via support page or live chat.",
    },
    {
        id: 8,
        question: "What are the EvoMovies payment methods?",
        answer: "We accept credit cards, PayPal and selected regional payment methods.",
    },
];

function FrequentlyAskedQuestions() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="bg-black px-6 pb-24 pt-24 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-4xl font-semibold">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-3 max-w-2xl text-white/55">
                            Got questions? We've got answers! Check out our FAQ
                            section to find answers to the most common questions
                            about EvoMovies.
                        </p>
                    </div>

                    <button className="rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-red-500">
                        Ask a Question
                    </button>
                </div>

                <div className="mt-16 grid gap-10 md:grid-cols-2">
                    {faqs.map((faq, index) => {
                        const open = openId === faq.id;

                        return (
                            <div
                                key={faq.id}
                                className="border-b border-red-600/40 pb-6"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-lg font-semibold">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div className="flex-1">
                                        <button
                                            onClick={() => toggle(faq.id)}
                                            className="flex w-full items-center justify-between text-left"
                                        >
                                            <h3 className="text-lg font-medium">
                                                {faq.question}
                                            </h3>

                                            <span className="text-xl">
                                                {open ? (
                                                    <FiMinus />
                                                ) : (
                                                    <FiPlus />
                                                )}
                                            </span>
                                        </button>

                                        {open && (
                                            <p className="mt-4 text-white/60">
                                                {faq.answer}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FrequentlyAskedQuestions;
