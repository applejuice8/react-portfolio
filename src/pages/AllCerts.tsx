import useOverlay from '../hooks/useOverlay'
import CertItem from '../components/Certs/CertItem'
import CertOverlay from '../components/Certs/CertOverlay'
import certData from '../data/certsData'
import Footer from '../components/Footer/Footer'
import BackButton from '../components/BackButton/BackButton'
import './All.css'

function AllCerts() {
    const { overlay, openOverlay, closeOverlay } = useOverlay()

    return (
        <>
            <div className="all-container">
                <BackButton section="certs" />

                <h2 className="section-title">All Certs</h2>

                <div id="certs-container">
                    {certData.map((item, index) => (
                        <CertItem key={index} onClick={() => openOverlay(item)} {...item} />
                    ))}
                </div>

                <BackButton section="certs" />
            </div>
            
            <CertOverlay overlay={overlay} closeOverlay={closeOverlay} />
            <Footer />
        </>
    )
}

export default AllCerts