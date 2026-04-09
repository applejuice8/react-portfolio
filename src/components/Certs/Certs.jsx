import { useState } from 'react';
import CertItem from './CertItem'
import certData from '../../data/certsData';

function Certs() {
    const [overlay, setOverlay] = useState(null)

    function openOverlay(cert) {
        setOverlay(cert)
        document.body.style.overflow = 'hidden'
    }

    function closeOverlay() {
        setOverlay(null)
        document.body.style.overflow = 'auto'
    }

    return(
        <>
            <div id="certs-container">
                {certData.map((item, index) => (
                    <CertItem key={index} onClick={() => openOverlay(item)} {...item} />
                ))}
            </div>

            {overlay && (
                <div id="overlay" className={overlay ? 'active' : ''}>
                    <button id="close-btn" onClick={closeOverlay} className="pointer">&times;</button>
                    <div id="overlay-cert">
                        <img id="overlay-image" src={overlay.image} alt={overlay.name} />
                        <div id="overlay-details">
                            <h2 id="overlay-name">{overlay.name}</h2>
                            <p id="overlay-issuer">{overlay.issuer}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Certs