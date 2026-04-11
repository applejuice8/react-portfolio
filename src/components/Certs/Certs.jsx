import { useNavigate } from 'react-router-dom'
import useOverlay from '../../hooks/useOverlay';
import CertItem from './CertItem'
import CertOverlay from './CertOverlay';
import certData from '../../data/certsData';

import './Certs.css'

function Certs() {
    const navigate = useNavigate()
    const { overlay, openOverlay, closeOverlay } = useOverlay()
    const featured = certData.filter(c => c.featured)

    return(
        <>
            <div id="certs-container">
                {featured.map((item, index) => (
                    <CertItem key={index} onClick={() => openOverlay(item)} {...item} />
                ))}
            </div>

            <a className="view-all-btn project-link pointer" onClick={() => navigate('/certs')}>
                View All Certificates
            </a>

            <CertOverlay overlay={overlay} closeOverlay={closeOverlay} />
        </>
    )
}

export default Certs