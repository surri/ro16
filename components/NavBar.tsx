import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <header className="flex items-center p-3 flex-wrap text-black bg-blue-700 z-10">
            <div
                id="logo"
                className="lg:text-xl p-2 mr-4 inline-flex items-center font-serif font-bold"
            >
                <Link href="/" className="">NextJS with Tailwind</Link>
            </div>
            <button
                onClick={() => setShowNav(!showNav)}
                type="button"
                className="inline-flex p-3 text-black hover:text-gray-300 focus:text-black focus:outline-none lg:hidden ml-auto"
            >
                <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 -53 384 384"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                    <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                    <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                </svg>
            </button>

            <div className="w-full flex-grow lg:inline-flex lg:flex-grow lg:w-auto">
                <div
                    className={
                        'lg:inline-flex lg:flex-row lg:ml-auto flex flex-col ' +
            (showNav ? '' : 'hidden')
                    }
                >
                    <Link href="/" className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900">
                        Home
                    </Link>

                    <Link href="/about" className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900">
                        About
                    </Link>
                    <Link href="/contact" className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900">
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar