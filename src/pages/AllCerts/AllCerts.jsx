import { useNavigate } from 'react-router-dom'
import useOverlay from '../../hooks/useOverlay';
import CertItem from '../../components/Certs/CertItem'
import CertOverlay from '../../components/Certs/CertOverlay';
import certData from '../../data/certsData';
import Footer from '../../components/Footer/Footer';

import './AllCerts.css'

function AllCerts() {
    const navigate = useNavigate()
    const { overlay, openOverlay, closeOverlay } = useOverlay()

    function returnHome() {
        navigate('/')
        
        setTimeout(() => {
            document.getElementById('certs')?.scrollIntoView()
        }, 100)
    }

    return (
        <>
            <div id="allcerts-container">
                <div id="allcerts-header">
                    <button className="pointer back-btn" onClick={() => returnHome()}>
                        Return
                    </button>
                    <h2 className="section-title">All Certs</h2>
                </div>
                <div id="certs-container">
                    {certData.map((item, index) => (
                        <CertItem key={index} onClick={() => openOverlay(item)} {...item} />
                    ))}
                </div>
            </div>
            
            <CertOverlay overlay={overlay} closeOverlay={closeOverlay} />
            <Footer />
        </>
    )
}

export default AllCerts