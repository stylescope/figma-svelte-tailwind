import tailwind from 'tailwindcss'
import tailwindConfig from './tailwind.config.js'
import autoprefixer from 'autoprefixer'

const config = {
    plugins: [tailwind(tailwindConfig), autoprefixer],
};

export default config;

