import { useEffect } from 'react';
import './CertOverlay.css';

function CertOverlay({ cert, onClose }) {
    // Don’t render anything if overlay is closed
    if (!cert) return null;

    // Prevent background scroll when overlay is active
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
        document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div id='overlay' className='active'>
        <button id='close-btn' className='pointer' onClick={onClose}>
            &times;
        </button>

        <div id='overlay-cert'>
            <img id='overlay-image' src={cert.image} alt={cert.name} />
            <div id='overlay-details'>
            <h2 id='overlay-name'>{cert.name}</h2>
            <p id='overlay-issuer'>{cert.issuer}</p>
            </div>
        </div>
        </div>
    );
}

export default CertOverlay;