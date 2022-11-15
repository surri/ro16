import type { AppProps } from 'next/app'
import '@styles/globals.css'
import Header from '@components/Header'
import Layout from '@components/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <Layout>
            <Header />
            <Component {...pageProps} />
        </Layout>
    )
}
