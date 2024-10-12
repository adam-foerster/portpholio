// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
	base: "/portfolio/",
	server: {
		port: 3000,
	},
	build: {
		outDir: "docs",
	},
});
