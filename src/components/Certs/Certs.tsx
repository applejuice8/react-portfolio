import useOverlay from '../../hooks/useOverlay'
import CertItem from './CertItem'
import CertOverlay from './CertOverlay'
import { certsData } from '../../data'
import './Certs.css'

function Certs() {
    const { overlay, openOverlay, closeOverlay } = useOverlay()

    return(
        <>
            <ul id="certs-container">
                {certsData.map((cert) => (
                    <CertItem key={cert.name} onClick={() => openOverlay(cert)} {...cert} />
                ))}
            </ul>

            <CertOverlay overlay={overlay} closeOverlay={closeOverlay} />
        </>
    )
}

export default Certs
