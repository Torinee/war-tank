// pages/_app.js
import { Montserrat } from 'next/font/google'
import '@/styles/global.css'
import 'swiper/css'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900']
})

export default function MyApp({ Component, pageProps }) {
    return (
        <main className={montserrat.className}>
            <Component {...pageProps} />
        </main>
    )
}
