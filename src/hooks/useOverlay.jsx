import { useState } from 'react'

function useOverlay() {
    const [overlay, setOverlay] = useState(null)

    function openOverlay(cert) {
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