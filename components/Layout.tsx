// import Navbar from './NavBar'
import Footer from './Footer'

export default function Layout({ children }: any) {


    return (
        <>
            <div className="flex flex-col min-h-screen bg-gray-100">
                {/* <Navbar /> */}
                <div
                    id="content"
                    className="flex-grow mx-auto px-8 w-full shadow rounded bg-white"
                >
                    <main>{children}</main>
                </div>

                {/* <Footer /> */}
            </div>
        </>
    )
}