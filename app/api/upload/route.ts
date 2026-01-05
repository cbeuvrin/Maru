import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { join } from "path";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file received" }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = Date.now() + "_" + file.name.replace(/\s/g, "_");

        // Save to public/uploads
        const uploadsDir = join(process.cwd(), "public", "uploads");

        // Ensure directory exists (you might need to run this manually or use mkdir)
        // mkdir -p public/uploads

        await writeFile(path.join(uploadsDir, filename), buffer);

        return NextResponse.json({ url: `/uploads/${filename}` }, { status: 201 });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Error uploading file" }, { status: 500 });
    }
}
