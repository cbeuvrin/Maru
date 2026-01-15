"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/525554309383"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={32} className="fill-white stroke-white" />
            <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                ¡Contáctame!
            </span>
        </a>
    );
}
