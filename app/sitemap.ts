import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://marucordero.com'

    // Static pages
    const staticPages = [
        '',
        '/blog',
        '/comunidad',
        '/skincare-riman',
        '/soluciones-digitales',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic blog posts
    // Note: Ensure prisma is properly set up to fetch posts
    try {
        const posts = await prisma.post.findMany({
            where: { published: true },
            select: { slug: true, updatedAt: true },
        })

        const dynamicPages = posts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: post.updatedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))

        return [...staticPages, ...dynamicPages]
    } catch (error) {
        console.error('Error generating sitemap:', error)
        return staticPages
    }
}
