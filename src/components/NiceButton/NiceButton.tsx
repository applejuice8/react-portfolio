import { PropsWithChildren } from 'react'
import './NiceButton.css'

type NiceButtonProps = {
    link?: string
    isCenter: boolean
    onClick?: () => void
    text?: string
}

function NiceButton({ link, isCenter, onClick, text, children }: PropsWithChildren<NiceButtonProps>) {
    return(
        <a href={link} 
        target="_blank" 
        className={`button-link pointer ${isCenter ? 'center' : null}`}
        onClick={onClick}
        >
            {text || children}
        </a>
    )
}

export default NiceButton