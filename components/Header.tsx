import { NextPage } from 'next'
import Head from 'next/head'
import { DefaultSeo, NextSeo } from 'next-seo'
import { withRouter } from 'next/router'
import useMetadata from '@lib/Seo/useMetadata'
import locales from '../pages/[locale]/locales.json'

const Header: NextPage = ({ router }: any) => {
    const seoData = useMetadata({ page: router?.query?.slug })

    const locale = locales[router?.query?.locale] || locales['en']

    const { sports } = router?.query || {}

    const sportsSEO = {
        title: sports,
        description: `${sports} 입니다`,
    }

    return (
        <>
            {sports ? (
                <NextSeo {...sportsSEO} />
            ): (
                <DefaultSeo {...seoData} />
            )}
            <Head>
                {/* <title>운동은 장비빨</title> */}
                {/* <meta name="description" content="장비빨 운동 스포츠 축구 골프 테니스 헬스 수영 스키" /> */}
                {/* {theme.systemTheme == 'dark' ? ( */}
                <link rel="shortcut icon" href={`/flags/${locale.toLowerCase()}.svg`} />
                {/* ) : ( */}
                {/* <link rel="icon" href="/favicon.ico" /> */}
                {/* )} */}
            </Head>
        </>
    )
}
export default withRouter(Header)