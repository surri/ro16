import type { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { Layout } from '@vercel/examples-ui'
import { Dictionary } from '../../lib/types'
import map from '../../public/map.svg'
import api from '../../lib/api'
import locales from './locales.json'
import example from './example.json'
import Board from '@components/Board'
import { useEffect, useRef, useState } from 'react'
import firebase from '@lib/firebase'
import {
    getFirestore,
    query,
    orderBy,
    limit,
    onSnapshot,
    addDoc,
    collection,
    serverTimestamp } from 'firebase/firestore'
import Message from '@components/Message'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'

interface Props {
  locale: string
  dictionary: Dictionary
  board: any
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
    const locale = locales[localeSlug] || locales['qat']
    const dictionary = await api.dictionaries.fetch(locale)
    // const board = await api.board.fetch(locale)
    const board = example

    return {
        props: {
            board,
            dictionary,
            locale,
        },
        revalidate: false,
    }
}

export default function CountryPage({ board, locale, dictionary }: Props) {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    const db = getFirestore(firebase)
    const messagesRef = collection(db, 'messages')
    const messagesQuery = query(messagesRef, orderBy('createdAt', 'desc'), limit(16))

    const inputRef = useRef(null)
    const bottomListRef = useRef(null)


    useEffect(() => {
        onSnapshot(messagesQuery, (querySnapshot) => {
            const ntew = []
            querySnapshot.forEach((doc) => {
                ntew.push({
                    id: doc.id,
                    createdAt: doc.data().createdAt?.toDate().toDateString() || new Date(),
                    ...doc.data(),
                })
            })
            setMessages(ntew)
        })
    }, [messagesQuery])

    useEffect(() => {
        bottomListRef.current?.scrollIntoView()
    }, [messages])

    const handleOnChange = (e) => {
        setNewMessage(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        const userId = 'test'
        const trimmedMessage = newMessage.trim()
        if (db) {
            addDoc(messagesRef, {
                user: userId,
                message: trimmedMessage,
                createdAt: serverTimestamp(),
            })
            setNewMessage('')
            // Scroll down to the bottom of the list
        }
    }

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
            <main className="flex flex-col items-center flex-1 z-10 w-full">
                <div className="flex flex-col md:flex-row w-full">
                    <section className="flex flex-1 hidden lg:block" />
                    <section className="flex flex-1 flex-col w-full">
                        <header className="mb-8 flex flex-col items-center justify-center">
                            <h1 className="text-2xl sm:text-4xl font-bold">{dictionary.title}</h1>
                            <h1 className="text-2xl sm:text-4xl font-bold">{dictionary.subtitle}</h1>
                        </header>
                        <div className="flex justify-center mb-4">
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
                        <Board board={board} dictionary={dictionary} />

                    </section>
                    <section className="flex flex-1 justify-end">
                        <div className="
                            flex
                            flex-col
                            justify-between
                            pt-4
                           bg-white
                            rounded-xl
                            shadow-lg
                            w-full
                            md:w-80
                            my-8
                            hover:shadow-2xl
                            transition
                            min-h-[40vh]
                            md:min-h-[80vh]
                        "
                        >
                            <div className="p-4 flex flex-col items-center text-lg overflow-scroll">
                                <ul className="w-full flex flex-col-reverse">
                                    {messages && messages.map((message) => (
                                        <li key={message.id}>
                                            <Message {...message} />
                                        </li>
                                    ))}
                                </ul>
                                <div ref={bottomListRef} />
                            </div>
                            <div className="p-4 bg-slate-100 rounded-b-xl">
                                <form
                                    onSubmit={handleOnSubmit}
                                    className="flex flex-row bg-gray-200 bg-coolDark-400 rounded-full z-10 max-w-screen-lg mx-auto text-slate-600 shadow-md"
                                >
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={newMessage}
                                        onChange={handleOnChange}
                                        placeholder={dictionary.greet}
                                        className="flex-1 bg-transparent outline-none px-4"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!newMessage}
                                        className="rounded-full uppercase font-semibold text-xs text-slate-600 hover:text-gray-900 transition-colors"
                                    >
                                        <FontAwesomeIcon icon={faCircleUp} className="w-8 h-8" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

CountryPage.Layout = Layout
