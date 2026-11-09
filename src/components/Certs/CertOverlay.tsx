import { useEffect } from 'react'
import { getImage } from '../../lib/assets'
import type { Cert } from '../../data/types'

interface CertOverlayProps {
    overlay: Cert | null
    closeOverlay: () => void
}

function CertOverlay({ overlay, closeOverlay }: CertOverlayProps) {
    // Close on Escape
    useEffect(() => {
        if (!overlay) return
        const onKey = (event: KeyboardEvent) => event.key === 'Escape' && closeOverlay()
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [overlay, closeOverlay])

    if (!overlay) return

    return(
        <div id="overlay" className={overlay ? 'active' : ''} role="dialog" aria-modal="true" aria-label={overlay.name} onClick={closeOverlay}>
            <button id="close-btn" onClick={closeOverlay} aria-label="Close" className="pointer">&times;</button>
            <div id="overlay-cert">
                <img id="overlay-image" src={getImage('certs', overlay.image)} alt={overlay.name} />
                <div id="overlay-details" onClick={(event) => event.stopPropagation()}>
                    <h2 id="overlay-name">{overlay.name}</h2>
                    <p id="overlay-issuer">{overlay.issuer}</p>
                </div>
            </div>
        </div>
    )
}

export default CertOverlay