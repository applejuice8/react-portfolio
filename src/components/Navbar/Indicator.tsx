import React, { useEffect, useRef } from 'react'
import './Indicator.css'

interface IndicatorProps {
    indicator: string
}

function Indicator({ indicator }: IndicatorProps) {
    const indicatorRef = useRef<HTMLDivElement>(null)

    // Update indicator every time hook change
    useEffect(() => {
        const activeElement = document.querySelector<HTMLElement>(`.nav-link[href="#${indicator}"]`)
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