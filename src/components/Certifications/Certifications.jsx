import { useState } from "react";
import CertificationItem from './CertificationItem'

const certData = [
    {
        image: 'images/certs/CS50x.png',
        name: 'CS50x: Introduction to Computer Science',
        issuer: 'Harvard University'
    },
    {
        image: 'images/certs/CS50AI.png',
        name: 'CS50AI: Introduction to Artificial Intelligence with Python',
        issuer: 'Harvard University'
    },
]

function Certifications() {
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
                    <CertificationItem key={index} onClick={() => openOverlay(item)} {...item} />
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

export default Certifications