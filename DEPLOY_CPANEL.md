# Guía de Despliegue en cPanel (GoDaddy/Otros)

Esta guía te ayudará a subir tu aplicación Next.js a un hosting cPanel que soporte Node.js.

## Prerrequisitos
- Acceso a cPanel.
- Opción "Setup Node.js App" (Configurar aplicación Node.js) disponible en cPanel.
- Acceso a la base de datos (si usas SQLite, asegúrate de que el archivo persista; si usas MySQL, necesitarás cambiar la configuración).

## Paso 1: Preparar los Archivos
No subas todo el proyecto. Sube **SOLO** estos archivos y carpetas a la carpeta de tu dominio en el "Administrador de Archivos" de cPanel (ej. `/public_html` o `/midominio.com`):

- `.next` (Carpeta oculta, se genera con `npm run build`)
- `public` (Carpeta de imágenes y estáticos)
- `package.json`
- `next.config.ts` (o .js)
- `middleware.ts` (si existe)
- `server.js` (Archivo creado específicamente para cPanel)
- `.env` (Archivo de variables de entorno - ¡IMPORTANTE! Asegúrate de tener `DATABASE_URL` y `NEXTAUTH_SECRET`)
- `prisma` (Carpeta, si usas SQLite y quieres migrar allí)

**NO SUBAS:**
- `node_modules` (Se instalarán en el servidor)
- `.git`

## Paso 2: Crear la Aplicación en cPanel
1. Entra a cPanel y busca **"Setup Node.js App"**.
2. Haz clic en **"Create Application"**.
3. **Node.js Version**: Elige la versión más reciente compatible (v18, v20...). Tu proyecto usa v20+.
4. **Application Mode**: `Production`.
5. **Application Root**: La carpeta donde subiste los archivos (ej. `/public_html`).
6. **Application URL**: Selecciona tu dominio.
7. **Application Startup File**: Escribe `server.js`.
8. Haz clic en **CREATE**.

## Paso 3: Instalar Dependencias
1. Una vez creada la app, verás un botón que dice **"Run NPM Install"**. Haz clic en él.
   - Si falla, puedes entrar por SSH a tu servidor y ejecutar `npm install` manual en la carpeta.

## Paso 4: Build (Construcción)
*Nota: Idealmente, subes la carpeta `.next` ya construida desde tu computadora para ahorrar recursos del servidor.*

Si necesitas construir en el servidor:
1. Entra por terminal (SSH) o usa la sección de comandos de Node.js en cPanel.
2. Ejecuta: `npm run build`.

## Paso 5: Reiniciar
1. En la pantalla de "Setup Node.js App", haz clic en **"Restart Application"**.

## Solución de Problemas
- **Error 500**: Revisa los logs en cPanel.
- **Base de Datos**: Si usas SQLite (`dev.db`), asegúrate de que el archivo tenga permisos de escritura. Si se borra cada vez que despliegas, considera migrar a MySQL.
