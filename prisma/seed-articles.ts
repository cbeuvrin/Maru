
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const adminEmail = 'admin@marucordero.com'
    const admin = await prisma.user.findUnique({
        where: { email: adminEmail },
    })

    if (!admin) {
        console.error('Admin user not found. Please run the main seed first.')
        return
    }

    const articles = [
        {
            title: "ICD de Riman: cómo funciona y por qué transformó mi rutina",
            slug: "icd-de-riman",
            excerpt: "Descubre cómo la línea ICD de RIMAN y la tradición del K-Beauty transformaron mi rutina de skincare.",
            content: `
                <p><strong>"Cuando comencé a conocer más a fondo la línea ICD de RIMAN, entendí que no se trataba solo de productos de skincare, sino de una propuesta integral basada en la tradición del K-Beauty y en la innovación científica. ICD es más que una rutina; es un ritual de cuidado que respeta la biología de la piel y potencia su luminosidad natural."</strong></p>
                <p>La filosofía detrás de RIMAN y su línea Incellderm (ICD) se centra en la restauración y el fortalecimiento de la barrera cutánea. A diferencia de otros productos que actúan solo en la superficie, la tecnología de RIMAN permite que los ingredientes activos penetren en las capas más profundas de la piel, logrando cambios visibles y duraderos.</p>
                <h2>¿Qué hace única a la línea ICD?</h2>
                <p>Lo que realmente me enamoró fue la combinación de ingredientes naturales poderosos, como la Centella Asiática gigante (Byungpool), con ciencia avanzada. No contiene químicos agresivos ni rellenos innecesarios. Cada gota está pensada para nutrir, hidratar y revitalizar.</p>
                <p>Al incorporar estos productos en mi día a día, noté cómo mi piel recuperaba su brillo, su elasticidad y su textura suave. No fue un cambio de la noche a la mañana, pero sí una transformación constante que me hizo creer plenamente en el poder de la constancia y de elegir lo mejor para mi piel.</p>
                <h2>Un ritual, no una obligación</h2>
                <p>Más allá de los resultados, RIMAN transformó mi perspectiva sobre el cuidado personal. Dejó de ser una tarea más en mi lista de pendientes para convertirse en un momento de conexión conmigo misma. Esos minutos frente al espejo son mi pausa, mi autocuidado y mi inversión en bienestar.</p>
                <p>Si estás buscando algo más que una crema o un suero, si buscas una experiencia que combine tradición, ciencia y resultados reales, te invito a probar la línea ICD. Tu piel te lo agradecerá.</p>
            `,
            image: "/banner3.png",
            published: true,
        },
        {
            title: "Cómo generar ingresos desde casa con RIMAN",
            slug: "ingresos-desde-casa",
            excerpt: "Aprende cómo construir un negocio flexible y rentable desde casa con RIMAN.",
            content: `
                <p><strong>"Emprender desde casa es posible cuando tienes las herramientas correctas y una comunidad que te respalda. RIMAN ofrece esa oportunidad."</strong></p>
                <p>El modelo de negocio de RIMAN está diseñado para adaptarse a tu estilo de vida. No necesitas descuidar tus otras responsabilidades para construir algo propio y rentable.</p>
                <h2>Flexibilidad y Crecimiento</h2>
                <p>Tú decides cuánto tiempo invertir. Ya sea que busques un ingreso extra o construir una carrera completa, el límite lo pones tú.</p>
                <p>Lo mejor es que no estás sola. Contamos con un sistema de capacitación y apoyo constante para asegurarnos de que tengas todo lo necesario para triunfar.</p>
                <h2>Únete a nosotros</h2>
                <p>Si estás lista para tomar el control de tu futuro financiero mientras compartes bienestar, este es el momento ideal para comenzar.</p>
            `,
            image: "/banner3.png",
            published: true,
        },
        {
            title: "K-Beauty para mujeres reales: cómo empezar sin complicaciones",
            slug: "k-beauty-mujeres-reales",
            excerpt: "Descubre cómo adaptar los secretos del K-Beauty a tu vida diaria sin complicaciones.",
            content: `
                <p><strong>"El K-Beauty no tiene por qué ser complicado. Se trata de entender tu piel y darle lo que necesita con productos de alta calidad y una rutina constante."</strong></p>
                <p>Muchas veces pensamos que el cuidado de la piel coreano implica 10 pasos imposibles de seguir en nuestra ajetreada vida diaria. Sin embargo, la esencia del K-Beauty es la prevención y la hidratación.</p>
                <h2>Simplificando la rutina</h2>
                <p>Puedes empezar con lo básico: una buena limpieza, hidratación profunda y protección solar. La clave está en la consistencia y en escuchar a tu piel.</p>
                <p>Conforme te sientas más cómoda, puedes ir integrando pasos como esencias o mascarillas, pero recuerda que menos es más cuando los productos son efectivos.</p>
                <h2>Resultados reales</h2>
                <p>La constancia es el secreto. Dedicarte unos minutos al día no solo mejora tu piel, sino que se convierte en un ritual de amor propio invaluable.</p>
            `,
            image: "/banner3.png",
            published: true,
        },
        {
            title: "Crear una vida con propósito",
            slug: "vida-con-proposito",
            excerpt: "Reflexiones sobre cómo alinear tus acciones diarias con tu verdadero propósito.",
            content: `
                <p><strong>"Vivir con propósito no es un destino, es una elección diaria. Es encontrar significado en lo que hacemos y compartirlo con los demás."</strong></p>
                <p>Muchas veces nos dejamos llevar por la inercia del día a día, olvidando qué es lo que realmente nos mueve. Detenerse a reflexionar es el primer paso para redirigir el rumbo.</p>
                <h2>Alineación y coherencia</h2>
                <p>Cuando tus acciones, tus valores y tus metas están alineados, todo fluye con mayor naturalidad. El trabajo deja de ser una carga y se convierte en una extensión de quien eres.</p>
                <p>Buscar un propósito no significa cambiar radicalmente tu vida de un día para otro, sino hacer pequeños ajustes que te acerquen a la versión de ti misma que deseas ser.</p>
                <h2>Impacto positivo</h2>
                <p>Al final, una vida con propósito es aquella que deja una huella positiva en quienes te rodean. Tu crecimiento personal inspira el crecimiento de los demás.</p>
            `,
            image: "/banner3.png",
            published: true,
        },
    ]

    for (const article of articles) {
        await prisma.post.upsert({
            where: { slug: article.slug },
            update: {},
            create: {
                ...article,
                authorId: admin.id,
            },
        })
    }

    console.log('Articles migrated successfully.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
