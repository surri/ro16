import type { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { Layout } from '@vercel/examples-ui'
import { Dictionary } from '../../lib/types'
import map from '../../public/map.svg'
import api from '../../lib/api'
import locales from './locales.json'

interface Props {
  locale: string
  dictionary: Dictionary
}

export const getStaticPaths: GetStaticPaths = async () => {
    // We don't want to specify all possible countries as we get those from the headers
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({
    params: { locale: localeSlug },
}: any) => {


    const locale = locales[localeSlug] || locales['en']

    console.log({ locale })
    const dictionary = await api.dictionaries.fetch(locale)

    // const board = await api.board.fetch(locale)

    return {
        props: {
            dictionary,
            locale,
        },
        revalidate: false,
    }
}

export default function CountryPage({ locale, dictionary }: Props) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
            <div className="fixed inset-0 overflow-hidden opacity-75 bg-[#f8fafb]">
                <Image
                    alt="World Map"
                    src={map}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <main className="flex flex-col items-center flex-1 px-4 sm:px-20 text-center z-10 pt-8 sm:pt-20">
                <header className="mb-8 flex flex-col items-center justify-center">
                    <h1 className="text-2xl sm:text-4xl font-bold">{dictionary.title}</h1>
                </header>
                <div className="">
                    <Image
                        alt="Country flag"
                        width={96}
                        // width={128}
                        height={72}
                        // height={96}
                        src={`/flags/${locale.toLowerCase()}.svg`}
                        layout="fixed"
                    />
                </div>
                <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-8 w-full max-w-[480px] hover:shadow-2xl transition pt-12">
                    <div className="p-4 flex flex-col justify-center items-center border-b text-lg italic">
                        {dictionary.greet}
                    </div>
                    <div className="p-4">
                        <pre className="bg-black text-white font-mono text-left py-2 px-4 rounded-lg text-sm leading-6">
                            <p>
                                <strong>{'locale: '}</strong>{locale}
                            </p>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    )
}

CountryPage.Layout = Layout
