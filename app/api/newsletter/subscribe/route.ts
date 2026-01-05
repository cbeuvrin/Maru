import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email requerido" }, { status: 400 });
        }

        const existingSubscriber = await prisma.subscriber.findUnique({
            where: { email },
        });

        if (existingSubscriber) {
            return NextResponse.json({ message: "Ya estás suscrito" }, { status: 200 });
        }

        await prisma.subscriber.create({
            data: { email },
        });

        return NextResponse.json({ message: "¡Suscripción exitosa!" }, { status: 201 });
    } catch (error) {
        console.error("Newsletter error:", error);
        return NextResponse.json({ error: "Error interno" }, { status: 500 });
    }
}
