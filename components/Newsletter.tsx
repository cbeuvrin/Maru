"use client";

import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (res.ok) {
                alert(data.message);
                setEmail("");
            } else {
                alert(data.error || "Algo salió mal");
            }
        } catch (error) {
            alert("Error al suscribirse");
        }
    };

    return (
        <section className="bg-white py-20 text-center">
            <div className="container mx-auto px-4 max-w-2xl">

                <h2 className="font-dancing text-5xl mb-6">
                    Suscríbete a mi Blog
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                    Recibe inspiración semanal, secretos de K-Beauty y consejos para potenciar tu mejor versión.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Tu correo electrónico"
                        required
                        className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[var(--accent-brown)] transition-colors"
                    />
                    <button
                        type="submit"
                        className="bg-[var(--accent-brown)] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-colors duration-300"
                    >
                        Suscribirse
                    </button>
                </form>

                <p className="text-xs text-gray-400 mt-4">
                    Respeto tu privacidad. Cero spam, solo contenido de valor.
                </p>
            </div>
        </section>
    );
}
