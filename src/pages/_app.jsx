// pages/_app.js
import { Montserrat } from 'next/font/google'
import '@/styles/global.css'
import 'swiper/css'
import { useEffect } from 'react'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900']
})

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        document.body.classList.add('css-ready')
    }, [])

    return (
        <main className={montserrat.className}>
            <Component {...pageProps} />
        </main>
    )
}
