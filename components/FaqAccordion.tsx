"use client";

import { useState } from "react";

interface FAQ {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    faqs: FAQ[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 hover:bg-white transition-colors duration-300"
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                    >
                        <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                        <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </span>
                    </button>

                    <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            }`}
                    >
                        <div className="overflow-hidden">
                            <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-lg border-t border-transparent">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
