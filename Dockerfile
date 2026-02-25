FROM node:25-alpine

WORKDIR /app

RUN npm install -g pnpm

# Instalar deps y arrancar Vite (--host para que escuche desde fuera del contenedor)
CMD ["sh", "-c", "pnpm install && pnpm run serve"]
