import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skincare & Riman | Maru Cordero",
    description: "Descubre la filosofía de RIMAN, sus ingredientes naturales y las rutinas de skincare coreano para transformar tu piel.",
};

interface Product {
    name: string;
    image: string;
}

interface RoutineProps {
    id: string;
    title: string;
    description: string;
    forSkin: string;
    products: Product[];
}

const RoutineSection = ({ title, description, forSkin, products, id }: RoutineProps) => (
    <div id={id} className="py-24 border-b border-gray-100 last:border-0 scroll-mt-20">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center max-w-6xl mx-auto">
                {/* Text Content */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-[var(--primary-beige)] text-[var(--accent-brown)] bg-opacity-30">
                        {forSkin}
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl mb-6">{title}</h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        {description}
                    </p>
                </div>

                {/* Visuals - Product Carousel */}
                <div className="w-full mb-12 relative">
                    <div className="flex overflow-x-auto space-x-8 pb-8 justify-start md:justify-center snap-x hide-scrollbar px-4">
                        {products.map((prod, idx) => (
                            <div key={idx} className="flex-shrink-0 w-48 flex flex-col items-center snap-center group">
                                {prod.image && (
                                    <div className="relative w-full h-48 mb-6 transition-transform duration-500 group-hover:scale-105">
                                        <Image
                                            src={prod.image}
                                            alt={prod.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                                <p className="text-center text-xs font-bold uppercase tracking-wide text-gray-800 leading-tight">
                                    {prod.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <Link
                    href="https://glowmaru.riman.com"
                    target="_blank"
                    className="inline-block bg-[var(--accent-brown)] text-white px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-black transition-all duration-300 rounded-sm"
                >
                    Comprar esta Rutina
                </Link>
            </div>
        </div>
    </div>
);

export default function SkincarePage() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center shadow-xl">
                <Image
                    src="/skincare/hero-skining.png"
                    alt="Skincare Header"
                    fill
                    className="object-cover object-position-[15%]"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <span className="block text-sm tracking-[0.2em] uppercase mb-4">K-Beauty</span>
                    <h1 className="font-dancing text-4xl md:text-7xl mb-6 max-w-4xl mx-auto leading-tight">
                        Skincare & RIMAN
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto"></div>
                </div>
            </section>



            {/* Intro Details Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="font-dancing text-4xl md:text-5xl mb-8">¿Qué es RIMAN?</h2>
                    <p className="text-xl text-gray-700 leading-relaxed font-light">
                        RIMAN nace del deseo de transformar el autocuidado en un ritual sagrado, inspirado en las prácticas holísticas orientales que honran cuerpo, mente y espíritu. Más que una rutina de skincare, RIMAN representa una filosofía de vida donde detenerte, respirar y cuidarte se convierte en un acto consciente de amor propio.
                    </p>
                </div>
            </section>

            {/* Sticky Navigation Menu */}
            <div className="sticky top-[75px] md:top-[90px] z-40 bg-white border-b border-gray-200 py-4 md:py-6 mb-16 shadow-sm">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block border border-gray-800 px-6 py-2 text-xs font-bold uppercase tracking-widest mb-4">
                        Elige tu rutina RIMAN
                    </span>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <a href="#basica" className="text-xs font-bold uppercase tracking-widest hover:text-[var(--accent-brown)] transition-colors">Básica</a>
                        <a href="#hidratacion" className="text-xs font-bold uppercase tracking-widest hover:text-[var(--accent-brown)] transition-colors">Hidratación</a>
                        <a href="#antimanchas" className="text-xs font-bold uppercase tracking-widest hover:text-[var(--accent-brown)] transition-colors">Antimanchas</a>
                        <a href="#anti-age" className="text-xs font-bold uppercase tracking-widest hover:text-[var(--accent-brown)] transition-colors">Anti-Age</a>
                        <a href="#grasa" className="text-xs font-bold uppercase tracking-widest hover:text-[var(--accent-brown)] transition-colors">Piel Grasa</a>
                    </div>
                </div>
            </div>



            {/* Intro Grid Section */}
            <section className="container mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Item 1 */}
                    <div className="text-center group">
                        <div className="w-full h-64 relative mb-6 rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="/skincare/intro-ingredients.jpg"
                                alt="Ingredientes Naturales"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-serif text-2xl mb-4">Ingredientes Naturales</h3>
                        <p className="text-gray-600">
                            Basada en la tradición del K-Beauty, RIMAN combina ingredientes naturales de origen sostenible con innovación científica de vanguardia. Sus fórmulas incorporan activos extraordinarios como la Giant BYoungPool, una cepa patentada de centella asiática conocida por sus poderosas propiedades regeneradoras, calmantes e hidratantes, capaz de fortalecer la barrera cutánea y devolver el equilibrio a la piel.
                        </p>
                    </div>
                    {/* Item 2 */}
                    <div className="text-center group">
                        <div className="w-full h-64 relative mb-6 rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="/skincare/intro-products-new.webp"
                                alt="Nuestros Productos"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-serif text-2xl mb-4">Nuestros Productos</h3>
                        <p className="text-gray-600">
                            A esto se suma el uso del Agua Energética de Lava de la isla de Jeju, filtrada naturalmente durante más de 400,000 años bajo el volcán Hallasan. Rica en minerales esenciales, esta agua volcánica aporta hidratación profunda, nutrición y luminosidad, ayudando a mantener una piel sana y radiante.
                        </p>
                    </div>
                    {/* Item 3 */}
                    <div className="text-center group">
                        <div className="w-full h-64 relative mb-6 rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="/skincare/intro-tech-new.webp"
                                alt="Su Tecnología"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-serif text-2xl mb-4">Su Tecnología</h3>
                        <p className="text-gray-600">
                            Gracias a su tecnología patentada de liposomas, RIMAN logra que estos ingredientes premium se absorban en capas más profundas de la piel, maximizando su eficacia y resultados visibles. Cada producto está diseñado para acompañarte en un momento íntimo de bienestar, donde la belleza se entiende como el reflejo natural de la armonía interior.
                        </p>
                    </div>
                </div>
            </section >



            {/* Experience Section */}
            < section className="bg-gray-50 py-20" >
                <div className="container mx-auto px-4">
                    <h2 className="font-dancing text-4xl md:text-5xl text-center mb-16">Con RIMAN experimentas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto text-center">
                        <div className="group">
                            <div className="w-full h-80 relative mb-6 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/skincare/exp-selfcare.jpg"
                                    alt="Autocuidado Consciente"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h4 className="font-serif text-xl mb-2">Autocuidado consciente</h4>
                        </div>
                        <div className="group">
                            <div className="w-full h-80 relative mb-6 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/skincare/exp-premium.jpg"
                                    alt="Ingredientes Premium"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h4 className="font-serif text-xl mb-2">Ingredientes premium naturales</h4>
                        </div>
                        <div className="group">
                            <div className="w-full h-80 relative mb-6 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/skincare/exp-rituals.jpg"
                                    alt="Rituales que nutren"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h4 className="font-serif text-xl mb-2">Rituales que nutren</h4>
                        </div>
                        <div className="group">
                            <div className="w-full h-80 relative mb-6 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/skincare/exp-results.jpg"
                                    alt="Resultados Progresivos"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h4 className="font-serif text-xl mb-2">Resultados Progresivos</h4>
                        </div>
                    </div>
                </div>
            </section >

            {/* Formula Combines Section */}
            < section className="container mx-auto px-4 py-20" >
                <h2 className="font-dancing text-4xl md:text-5xl text-center mb-16">Cada fórmula combina</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
                    <div>
                        <div className="w-32 h-32 relative mx-auto mb-6 rounded-full overflow-hidden shadow-md">
                            <Image
                                src="/skincare/formula-innovation.jpg"
                                alt="Innovación Científica"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h4 className="font-serif text-xl mb-4">Innovación científica coreana</h4>
                        <p className="text-gray-600">Respaldada por laboratorios de alto rendimiento.</p>
                    </div>
                    <div>
                        <div className="w-32 h-32 relative mx-auto mb-6 rounded-full overflow-hidden shadow-md">
                            <Image
                                src="/skincare/formula-holistic.jpg"
                                alt="Prácticas Holísticas"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h4 className="font-serif text-xl mb-4">Prácticas holísticas ancestrales</h4>
                        <p className="text-gray-600">Conciben el auto-cuidado como un ritual.</p>
                    </div>
                    <div>
                        <div className="w-32 h-32 relative mx-auto mb-6 rounded-full overflow-hidden shadow-md">
                            <Image
                                src="/skincare/formula-extracts.jpg"
                                alt="Extractos Naturales"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h4 className="font-serif text-xl mb-4">Extractos naturales y botánicos</h4>
                        <p className="text-gray-600">Seleccionados por sus beneficios restauradores.</p>
                    </div>
                </div>

                {/* New Section 1: What makes RIMAN different */}
                <div className="mt-24 mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="w-full h-[500px] relative rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/skincare/diff-riman.jpg"
                                alt="Qué hace a RIMAN diferente"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="lg:pl-8">
                            <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">¿Qué hace a RIMAN diferente?</h2>
                            <ul className="space-y-4 text-gray-600 leading-relaxed font-light list-disc pl-5">
                                <li>No es solo skincare: es un ritual que integra bienestar emocional y resultados visibles.</li>
                                <li>K-Beauty: Tecnologías coreanas de vanguardia que trabajan desde las capas profundas de la piel.</li>
                                <li>Texturas sensoriales y fórmulas limpias que ofrecen lujo real sin complicaciones.</li>
                                <li>Una experiencia diseñada para que cada mujer se honre, se escuche y se elija a sí misma.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* New Section 2: Why I trust this brand */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 lg:pr-8">
                            <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">¿Por qué confío en esta marca?</h2>
                            <p className="text-gray-600 leading-relaxed font-light mb-6">
                                Porque he experimentado en mí misma lo que puede hacer una rutina bien diseñada.
                            </p>
                            <p className="text-gray-600 leading-relaxed font-light mb-6">
                                Riman no solo ofrece productos extraordinarios, sino que comparte mi visión: la belleza es disciplina, cuidado y bienestar integral. Sus productos se han convertido en parte esencial de mi día a día y de mi estilo de vida.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2 w-full h-[500px] relative rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/skincare/trust-maru.jpg"
                                alt="Por qué confío"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section >

            {/* Products Showcase Section */}
            < section className="bg-white py-20 overflow-hidden" >
                <div className="container mx-auto px-4">
                    <h2 className="font-dancing text-4xl md:text-5xl text-center mb-16">Nuestros Productos Estrella</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-center">
                        <div className="relative group border border-gray-100 rounded-lg p-4 flex flex-col items-center">
                            <div className="relative w-full h-40 mb-4">
                                <Image src="/skincare/products/snow-enzyme.webp" alt="Enzyme Cleaner" fill className="object-contain" />
                            </div>
                            <p className="text-center text-sm font-bold">Snow Enzyme Cleanser</p>
                        </div>
                        <div className="relative group border border-gray-100 rounded-lg p-4 flex flex-col items-center">
                            <div className="relative w-full h-40 mb-4">
                                <Image src="/skincare/products/derm-cream.webp" alt="Dermatology Cream" fill className="object-contain" />
                            </div>
                            <p className="text-center text-sm font-bold">Dermatology Cream</p>
                        </div>
                        <div className="relative group border border-gray-100 rounded-lg p-4 flex flex-col items-center">
                            <div className="relative w-full h-40 mb-4">
                                <Image src="/skincare/products/rad-ampoule.webp" alt="Serum" fill className="object-contain" />
                            </div>
                            <p className="text-center text-sm font-bold">Radiansome Serum</p>
                        </div>
                        <div className="relative group border border-gray-100 rounded-lg p-4 flex flex-col items-center">
                            <div className="relative w-full h-40 mb-4">
                                <Image src="/skincare/products/sunscreen.png" alt="Sunscreen" fill className="object-contain" />
                            </div>
                            <p className="text-center text-sm font-bold">Sunscreen</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Intro Text for Routines */}
            < section className="container mx-auto px-4 pt-10 text-center" >
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-dancing text-5xl mb-8">Elige tu rutina RIMAN</h2>
                </div>
            </section >

            {/* Routine Preview Cards */}
            <section className="container mx-auto px-4 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {/* Card 1: Básica */}
                    <div className="bg-[#FAF7F5] group flex flex-col h-full">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <Image
                                src="/skincare/routine-basic.jpg"
                                alt="Rutina Básica Esencial"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-3 text-center flex flex-col items-center flex-grow">
                            <h3 className="text-sm tracking-widest mb-2 uppercase font-light">Básica<br />Esencial</h3>
                            <p className="text-[10px] text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                Recomendada para: todo tipo de piel, principiantes, piel deshidratada o apagada.
                            </p>
                            <div className="mt-auto pt-2">
                                <a href="#basica" className="inline-block bg-[#E0D0C1] text-black px-5 py-2 text-[9px] font-bold tracking-[0.2em] hover:bg-[#d0bea9] transition-colors rounded-full uppercase">
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Hidratación */}
                    <div className="bg-[#FAF7F5] group flex flex-col h-full">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <Image
                                src="/skincare/routine-hydro.jpg"
                                alt="Rutina Hidratación Profunda"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-3 text-center flex flex-col items-center flex-grow">
                            <h3 className="text-sm tracking-widest mb-2 uppercase font-light">Hidratación<br />Profunda</h3>
                            <p className="text-[10px] text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                Para piel seca que necesita confort, suavidad y nutrición intensa.
                            </p>
                            <div className="mt-auto pt-2">
                                <a href="#hidratacion" className="inline-block bg-[#E0D0C1] text-black px-5 py-2 text-[9px] font-bold tracking-[0.2em] hover:bg-[#d0bea9] transition-colors rounded-full uppercase">
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Antimanchas */}
                    <div className="bg-[#FAF7F5] group flex flex-col h-full">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <Image
                                src="/skincare/routine-spot.jpg"
                                alt="Rutina Antimanchas"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-3 text-center flex flex-col items-center flex-grow">
                            <h3 className="text-sm tracking-widest mb-2 uppercase font-light">Antimanchas</h3>
                            <p className="text-[10px] text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                Diseñada para unificar el tono, disminuir manchas y aportar brillo saludable.
                            </p>
                            <div className="mt-auto pt-2">
                                <a href="#antimanchas" className="inline-block bg-[#E0D0C1] text-black px-5 py-2 text-[9px] font-bold tracking-[0.2em] hover:bg-[#d0bea9] transition-colors rounded-full uppercase">
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Anti-Age */}
                    <div className="bg-[#FAF7F5] group flex flex-col h-full">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <Image
                                src="/skincare/routine-age.jpg"
                                alt="Rutina Anti-Age"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-3 text-center flex flex-col items-center flex-grow">
                            <h3 className="text-sm tracking-widest mb-2 uppercase font-light">Anti-Age</h3>
                            <p className="text-[10px] text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                Pensada para piel madura o con pérdida de firmeza.
                            </p>
                            <div className="mt-auto pt-2">
                                <a href="#anti-age" className="inline-block bg-[#E0D0C1] text-black px-5 py-2 text-[9px] font-bold tracking-[0.2em] hover:bg-[#d0bea9] transition-colors rounded-full uppercase">
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Piel Grasa */}
                    <div className="bg-[#FAF7F5] group flex flex-col h-full">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <Image
                                src="/skincare/routine-oily.jpg"
                                alt="Piel Grasa o con Acné"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-3 text-center flex flex-col items-center flex-grow">
                            <h3 className="text-sm tracking-widest mb-2 uppercase font-light">Piel Grasa o<br />con Acné</h3>
                            <p className="text-[10px] text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                Equilibrio, purificación y control de brillo sin resecar.
                            </p>
                            <div className="mt-auto pt-2">
                                <a href="#grasa" className="inline-block bg-[#E0D0C1] text-black px-5 py-2 text-[9px] font-bold tracking-[0.2em] hover:bg-[#d0bea9] transition-colors rounded-full uppercase">
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div >
                <RoutineSection
                    id="basica"
                    title="Rutina Básica Esencial"
                    forSkin="Todo Tipo de Piel / Principiantes"
                    description="La base fundamental del cuidado coreano. Enfocada en una limpieza suave pero efectiva y una protección solar superior. Ideal para quienes inician en el mundo de RIMAN."
                    products={[
                        { name: "Limpiador", image: "/skincare/products/snow-enzyme.webp" },
                        { name: "Tónico", image: "/skincare/products/rad-toner.webp" },
                        { name: "Sérum Hidratante", image: "/skincare/products/rad-ampoule.webp" },
                        { name: "Boost - Sérum - Boost", image: "/skincare/products/derm-package.webp" },
                        { name: "Protector Solar (AM)", image: "/skincare/products/sunscreen.png" }
                    ]}
                />

                <RoutineSection
                    id="hidratacion"
                    title="Rutina Hidratación Profunda"
                    forSkin="Piel Seca / Deshidratada"
                    description="Un baño de hidratación para tu piel. Restaura la barrera cutánea, elimina la tirantez y devuelve ese brillo natural 'Glass Skin' que tanto amamos."
                    products={[
                        { name: "Limpiador Hidratante", image: "/skincare/products/snow-enzyme-ex.webp" },
                        { name: "Tónico Refrescante", image: "/skincare/products/oil-mist.webp" },
                        { name: "Gel Calmante", image: "/skincare/products/calming-gel.webp" },
                        { name: "Boost - Sérum - Boost", image: "/skincare/products/derm-package.webp" },
                        { name: "Protector Solar (AM)", image: "/skincare/products/sunscreen.png" }
                    ]}
                />

                <RoutineSection
                    id="antimanchas"
                    title="Rutina Antimanchas"
                    forSkin="Piel con Hiperpigmentación"
                    description="Combate las manchas oscuras y unifica el tono de la piel. Ingredientes potentes que trabajan a nivel celular para iluminar y aclarar el rostro progresivamente."
                    products={[
                        { name: "Limpiador Suave", image: "/skincare/products/powder-wash.webp" },
                        { name: "Boost - Sérum - Boost", image: "/skincare/products/derm-package.webp" },
                        { name: "Crema Hidratante", image: "/skincare/products/derm-cream.webp" },
                        { name: "Protector Solar (AM)", image: "/skincare/products/sunscreen.png" }
                    ]}
                />

                <RoutineSection
                    id="anti-age"
                    title="Rutina Anti-Age"
                    forSkin="Piel Madura / Signos de Edad"
                    description="La joya de la corona con la línea Radiansome. Tecnología de liposomas que penetra profundamente para mejorar la elasticidad, reducir arrugas y reafirmar."
                    products={[
                        { name: "Limpiador Suave", image: "/skincare/products/snow-enzyme.webp" },
                        { name: "Tónico", image: "/skincare/products/rad-toner.webp" },
                        { name: "Sérum Reafirmante", image: "/skincare/products/rad-ampoule.webp" },
                        { name: "Crema Hidratante", image: "/skincare/products/rad-cream.webp" },
                        { name: "Protector Solar (AM)", image: "/skincare/products/sunscreen.png" }
                    ]}
                />

                <RoutineSection
                    id="grasa"
                    title="Rutina Piel Grasa o con Acné"
                    forSkin="Piel Grasa / Mixta / Tendencia Acneica"
                    description="Equilibrio es la clave. Controla el exceso de sebo y purifica los poros sin resecar ni agredir la piel. Calma la inflamación y mantiene el rostro fresco."
                    products={[
                        { name: "Limpiador Equilibrante", image: "/skincare/products/powder-wash.webp" },
                        { name: "Gel Calmante", image: "/skincare/products/calming-gel.webp" },
                        { name: "Boost - Sérum - Boost", image: "/skincare/products/derm-package.webp" },
                        { name: "Crema Hidratante", image: "/skincare/products/derm-cream.webp" },
                        { name: "Protector Solar (AM)", image: "/skincare/products/sunscreen.png" }
                    ]}
                />
            </div >

            {/* CTA Section */}
            <section className="relative w-full py-16 md:py-24 flex items-center justify-center overflow-hidden">
                <Image
                    src="/skincare/cta-buy.jpg"
                    alt="CTA Background"
                    fill
                    className="object-cover object-[center_30%]"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <span className="block text-sm tracking-[0.2em] uppercase mb-4 opacity-90">Vive RIMAN tú misma</span>
                    <h2 className="font-dancing text-5xl md:text-6xl mb-8">¿Quieres comenzar tu rutina?</h2>
                    <p className="text-xl max-w-2xl mx-auto mb-12 opacity-95 font-light">
                        Si deseas conocer los productos ideales para ti, te acompaño paso a paso, desde elegir los productos correctos hasta armar una rutina personalizada.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link
                            href="https://glowmaru.riman.com"
                            target="_blank"
                            className="inline-block border-2 border-white px-10 py-3 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Comprar RIMAN
                        </Link>
                        <Link
                            href="/contacto"
                            className="inline-block bg-white text-black border-2 border-white px-10 py-3 text-sm tracking-[0.2em] uppercase hover:bg-transparent hover:text-white transition-all duration-300"
                        >
                            Quiero Asesoría
                        </Link>
                    </div>
                </div>
            </section >
        </div >
    );
}
