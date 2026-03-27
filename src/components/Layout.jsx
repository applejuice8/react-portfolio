import Header from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
    return(
        <div id="container">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout