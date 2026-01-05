"use client";

import { signOut } from "next-auth/react";

export default function AdminSignOutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="flex items-center text-red-500 hover:text-red-700 transition-colors w-full"
        >
            <span>Cerrar Sesión</span>
        </button>
    );
}
