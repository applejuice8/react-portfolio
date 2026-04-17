import { PropsWithChildren } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function Layout({ children }: PropsWithChildren) {
    return(
        <div id="container">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout