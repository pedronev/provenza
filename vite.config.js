import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // ❌ Remover esta línea si usas dominio personalizado
  // base: '/provenza/',

  // ✅ O usar conditional base según el entorno
  base: "/provenza/", // Base URL para GitHub Pages

  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["lucide-react"],
        },
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },

  // ✅ Añadir optimización para GitHub Pages
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png", "**/*.svg", "**/*.webp"],
});
