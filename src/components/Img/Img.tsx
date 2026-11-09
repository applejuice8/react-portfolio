import { initials } from '../../lib/format'
import './Img.css'

interface ImgProps {
    src?: string
    alt: string
    className?: string
    fit?: 'cover' | 'contain'
}

/** Image with an initials placeholder when the file is missing. Lazy-loaded, decoded off the main thread. */
function Img({ src, alt, className = '', fit = 'cover' }: ImgProps) {
    if (!src) {
        return (
            <div role="img" aria-label={`${alt} (placeholder)`} className={`img-placeholder ${className}`}>
                <span>{initials(alt) || '?'}</span>
            </div>
        )
    }
    return <img src={src} alt={alt} loading="lazy" decoding="async" className={`img-${fit} ${className}`} />
}

export default Img
