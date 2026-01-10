import Image from "next/image";

const CAROUSEL_IMAGES = [
    "/carousel/image1.jpg",
    "/carousel/image2.jpg",
    "/carousel/image3.png",
    "/carousel/image4.jpg",
    "/carousel/image5.jpg",
];

export default function LifeInMotion() {
    return (
        <section className="bg-[var(--primary-beige)] py-20 text-center overflow-hidden">
            <div className="w-full">
                <h2 className="font-dancing text-4xl md:text-5xl mb-8">
                    Mi vida en movimiento
                </h2>

                <div className="relative w-full overflow-hidden group">
                    {/* Carousel Container */}
                    <div className="flex gap-6 w-[200%] animate-marquee group-hover:[animation-play-state:paused]">
                        {/* First set of images */}
                        {CAROUSEL_IMAGES.map((src, index) => (
                            <div
                                key={`set1-${index}`}
                                className="flex-shrink-0 w-[300px] md:w-[400px] aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl"
                            >
                                <Image
                                    src={src}
                                    alt={`Life in Motion ${index + 1}`}
                                    fill
                                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        ))}
                        {/* Second set of images for seamless loop */}
                        {CAROUSEL_IMAGES.map((src, index) => (
                            <div
                                key={`set2-${index}`}
                                className="flex-shrink-0 w-[300px] md:w-[400px] aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl"
                            >
                                <Image
                                    src={src}
                                    alt={`Life in Motion ${index + 1}`}
                                    fill
                                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Gradient Overlays for smooth edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--primary-beige)] to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--primary-beige)] to-transparent z-10"></div>
                </div>


            </div>
        </section>
    );
}
