import { defineConfig } from 'vite'
import path, { resolve } from 'path'



export default defineConfig({
    publicDir: 'public',
    define: {

    },
    base: '/',
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                search: resolve(__dirname, 'search.html'),
                detail: resolve(__dirname, 'detail.html')
            },
            output: {
                chunkFileNames: 'javascript/[name]-[hash:8].js',
                entryFileNames: 'javascript/[name]-[hash:8].js',
                assetFileNames: chunkInfo => {
                    const imageReg = /(png|gif|jpeg|svg|webp)$/
                    const [, ext] = path.basename(chunkInfo.name).split('.')
                    if (ext === 'css') {
                        return `css/[name]-[hash:8].${ext}`
                    } else if (imageReg.test(ext)) {
                        return `images/[name]-[hash:8].${ext}`
                    }
                    return 'assets/[name]-[hash:8].[ext]'
                }
            }
        },
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        emptyOutDir: true
    },
    server: {
        port: 7200,
        open: true,
        // proxy: {
        //     '/api': {
        //         target: 'http://121.89.213.194:5001/',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, ''),
        //     },
        // }
    },
})