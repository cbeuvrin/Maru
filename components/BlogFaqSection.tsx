"use client";

import FaqAccordion from "@/components/FaqAccordion";

const blogFaqs = [
    {
        question: "¿Cómo puedo comprar productos RIMAN a través de Maru?",
        answer: "Puedes contactarme directamente a través del formulario, WhatsApp o redes sociales. Te ayudo a elegir los productos ideales y te guío durante todo el proceso para que inicies tu rutina con confianza."
    },
    {
        question: "¿Es posible generar ingresos desde casa con RIMAN?",
        answer: "Sí, es posible. RIMAN ofrece un modelo de negocio flexible que te permite generar ingresos desde casa compartiendo productos de alta calidad y construyendo relaciones auténticas. El crecimiento depende del compromiso, la constancia y el aprendizaje continuo."
    },
    {
        question: "¿Necesito experiencia previa en skincare o negocios para comenzar con RIMAN?",
        answer: "No. No necesitas experiencia previa. RIMAN está pensado para mujeres reales que desean aprender, crecer y emprender a su propio ritmo. Yo te acompaño paso a paso, desde el conocimiento de los productos hasta la construcción de una rutina o un proyecto alineado a tus objetivos."
    },
    {
        question: "¿Qué tipo de acompañamiento ofrece Maru a su comunidad?",
        answer: "Acompaño a mi comunidad de forma cercana y personalizada. Comparto mi experiencia, ofrezco orientación, espacios de networking y apoyo constante para que cada mujer avance con seguridad, claridad y propósito."
    },
    {
        question: "¿Los productos RIMAN son adecuados para todo tipo de piel?",
        answer: "Sí. Las fórmulas de RIMAN están diseñadas para adaptarse a distintos tipos de piel, incluso pieles sensibles. Gracias a sus ingredientes naturales y tecnología avanzada, ayudan a fortalecer la barrera cutánea y a mantener la piel equilibrada."
    },
    {
        question: "¿En cuánto tiempo se pueden ver resultados en la piel?",
        answer: "Los resultados varían según cada persona y su constancia. Muchas mujeres notan cambios en hidratación y luminosidad en las primeras semanas. Los beneficios más visibles llegan con el uso constante y una rutina adecuada a las necesidades de tu piel."
    }
];

export default function BlogFaqSection() {
    return (
        <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="font-dancing text-4xl text-center mb-6 text-gray-800">Preguntas Frecuentes</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                Comunícate conmigo al <a href="mailto:proyectosnetworkmkt@gmail.com" className="text-black font-medium hover:underline">proyectosnetworkmkt@gmail.com</a> si no puedes encontrar una respuesta a tu pregunta.
            </p>
            <FaqAccordion faqs={blogFaqs} />
        </div>
    );
}
