import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
    // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
    schema: "./prisma/schema.prisma",     // ← Esta es la línea clave
    // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←

    datasource: {
        url: env("DATABASE_URL"),
    },
});