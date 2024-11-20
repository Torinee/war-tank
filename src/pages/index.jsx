import MainLayout from '@/components/MainLayout'
import Home from '@/screens/Home'
import Head from 'next/head'

export default function Page() {
    return (
        <MainLayout>
            <Head>
                <title>War Tank: Dominate the Battlefield</title>
                <meta
                    name='description'
                    content='Command powerful tanks, conquer enemies, and bring peace to a chaotic world. Experience thrilling battles and strategic gameplay in this epic tank warfare adventure!'
                />
            </Head>
            <Home />
        </MainLayout>
    )
}
