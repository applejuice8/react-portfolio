import { useState } from 'react'
import type { Cert } from '../types'

function useOverlay() {
    const [overlay, setOverlay] = useState<Cert | null>(null)

    function openOverlay(cert: Cert) {
        setOverlay(cert)
        document.body.style.overflow = 'hidden'
    }

    function closeOverlay() {
        setOverlay(null)
        document.body.style.overflow = 'auto'
    }

    return({ overlay, openOverlay, closeOverlay })
}

export default useOverlay