// pages/_app.js
import { Montserrat } from 'next/font/google'
import '@/styles/global.css' // Ensure your global CSS is imported

const montserrat = Montserrat({
    subsets: ['latin'], // Include the subsets you need
    weight: ['400', '500', '600', '700', '800', '900'] // Add the font weights you need
})

export default function MyApp({ Component, pageProps }) {
    return (
        <main className={montserrat.className}>
            <Component {...pageProps} />
        </main>
    )
}
