import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    outDir: 'build',
    // Enable minification with esbuild (faster than terser)
    minify: 'esbuild',
    // Drop console logs in production
    esbuildOptions: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-select',
            '@radix-ui/react-toast',
            '@radix-ui/react-accordion',
            '@radix-ui/react-tabs',
          ],
          'form-vendor': [
            'react-hook-form',
            '@hookform/resolvers',
            'zod',
          ],
          'query-vendor': ['@tanstack/react-query'],
        },
      },
    },
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Source maps only in development
    sourcemap: mode === 'development',
    // Increase chunk size warning limit (500kb)
    chunkSizeWarningLimit: 500,
  },
  
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true
  },
  
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['lucide-react'], // Tree-shakeable
  },
}));
