function CertOverlay({ cert, onClose }) {
    if (!cert) return null;

    return (
        <div id='overlay'>
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