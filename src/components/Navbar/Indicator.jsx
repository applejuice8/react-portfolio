import { useEffect, useRef } from 'react'
import './Indicator.css'

function Indicator({ indicator }) {
    const indicatorRef = useRef(null)

    // Update indicator every time hook change
    useEffect(() => {
        const activeElement = document.querySelector(`.nav-link[href="#${indicator}"]`)
        if (!activeElement || !indicatorRef.current) return

        // Change size, location depending on active section
        indicatorRef.current.style.width = `${activeElement.getBoundingClientRect().width}px`
        indicatorRef.current.style.left = `${activeElement.offsetLeft + 24}px`
    }, [indicator])

    return(
        <div id="nav-indicator" ref={indicatorRef}></div>
    )
}

export default Indicator