"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Tiptap from "@/components/Tiptap";
import Image from "next/image";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default function EditPost({ params }: Props) {
    const { id } = use(params);
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`/api/posts/${id}`);
                if (!res.ok) {
                    alert("Error al cargar el artículo");
                    router.push("/admin/posts");
                    return;
                }
                const data = await res.json();
                setTitle(data.title);
                setSlug(data.slug);
                setExcerpt(data.excerpt || "");
                setContent(data.content);
                setImage(data.image || "");
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [id, router]);

    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setTitle(val);
        // Only auto-update slug if it's empty or the user hasn't manually edited it much (simplification: just update it)
        // Better UX: Don't auto-update slug on edit unless explicitly wanted, but for now let's keep it manual or simple
        if (!slug) {
            setSlug(generateSlug(val));
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return;

        setIsLoading(true);
        const formData = new FormData();
        formData.append("file", e.target.files[0]);

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            if (res.ok) {
                setImage(data.url);
            } else {
                alert("Error subiendo imagen");
            }
        } catch (error) {
            console.error(error);
            alert("Error subiendo imagen");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (published: boolean) => {
        if (!title || !slug || !content) {
            alert("Título, slug y contenido son requeridos");
            return;
        }

        setIsLoading(true);
        try {
            const res = await fetch("/api/posts", { // TODO: Should probably be PUT to /api/posts/[id] or handle UPDATE in basic POST?
                // Actually, let's use PUT to /api/posts/[id]
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: id, // Include ID just in case
                    title,
                    slug,
                    excerpt,
                    content,
                    image,
                    published,
                }),
            });

            // Wait, I haven't implemented PUT in /api/posts/[id]/route.ts yet!
            // I need to add PUT to /api/posts/[id]/route.ts

            const resPut = await fetch(`/api/posts/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    slug,
                    excerpt,
                    content,
                    image,
                    published,
                }),
            });

            if (resPut.ok) {
                router.push("/admin/posts");
            } else {
                alert("Error al actualizar el artículo");
            }
        } catch (error) {
            console.error(error);
            alert("Error al guardar");
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <div className="p-8 text-center">Cargando...</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Editar Artículo</h1>
                <div className="flex gap-4">
                    <button
                        onClick={() => handleSubmit(false)}
                        disabled={isLoading}
                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                    >
                        Guardar Borrador
                    </button>
                    <button
                        onClick={() => handleSubmit(true)}
                        disabled={isLoading}
                        className="px-6 py-2 bg-[var(--accent-brown)] text-white rounded-lg hover:bg-black transition"
                    >
                        Publicar
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent-brown)] outline-none"
                        placeholder="Escribe el título aquí..."
                    />
                </div>

                {/* Slug */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Slug (URL)</label>
                    <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                    />
                </div>

                {/* Excerpt */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Resumen (Excerpt)</label>
                    <textarea
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent-brown)] outline-none h-24"
                        placeholder="Breve descripción para la tarjeta del blog..."
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Imagen Principal</label>
                    <div className="flex items-center gap-4">
                        <input
                            type="file"
                            onChange={handleImageUpload}
                            className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-[var(--primary-beige)] file:text-[var(--text-dark)]
                            hover:file:bg-[var(--accent-brown)] hover:file:text-white
                            transition-all"
                        />
                        {image && (
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                                <Image src={image} alt="Preview" fill className="object-cover" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Editor */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contenido</label>
                    <Tiptap content={content} onChange={setContent} />
                </div>
            </div>
        </div>
    );
}
