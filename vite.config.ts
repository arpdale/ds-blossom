import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  publicDir: false,
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      include: ['src'],
      exclude: ['src/App.tsx', 'src/main.tsx', 'src/vite-env.d.ts'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        /^@radix-ui\//,
        /^@base-ui\//,
        'radix-ui',
        'lucide-react',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'tw-animate-css',
        'cmdk',
        'date-fns',
        'embla-carousel-react',
        'input-otp',
        'next-themes',
        'react-day-picker',
        'react-resizable-panels',
        'recharts',
        'sonner',
        'vaul',
        '@fontsource-variable/geist',
      ],
      output: {
        assetFileNames: (asset) =>
          asset.name === 'style.css' ? 'index.css' : asset.name ?? 'asset',
      },
    },
    cssCodeSplit: false,
  },
})
