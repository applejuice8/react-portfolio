import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function Layout({ children }) {
    return(
        <div id="container">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout