function CertOverlay({ overlay, closeOverlay }) {
    if (!overlay) return

    return(
        <div id="overlay" className={overlay ? 'active' : ''}>
            <button id="close-btn" onClick={closeOverlay} className="pointer">&times;</button>
            <div id="overlay-cert">
                <img id="overlay-image" src={`/images/certs/${overlay.image}`} alt={overlay.name} />
                <div id="overlay-details">
                    <h2 id="overlay-name">{overlay.name}</h2>
                    <p id="overlay-issuer">{overlay.issuer}</p>
                </div>
            </div>
        </div>
    )
}

export default CertOverlay