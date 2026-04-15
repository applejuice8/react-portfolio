import { useNavigate } from 'react-router-dom'
import useOverlay from '../../hooks/useOverlay';
import CertItem from './CertItem'
import CertOverlay from './CertOverlay';
import certData from '../../data/certsData';
import NiceButton from '../NiceButton/NiceButton';

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

            <NiceButton text="View All Certificates" isCenter={true} onClick={() => navigate('/certs')} />

            <CertOverlay overlay={overlay} closeOverlay={closeOverlay} />
        </>
    )
}

export default Certs