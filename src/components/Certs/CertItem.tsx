import { getImage } from '../../lib/assets'
import type { Cert } from '../../data/types'
import Img from '../Img/Img'

interface CertItemProps extends Cert {
    onClick: () => void
}

/** A bare picture (no card or border) with the title and issuer centred under it. Click to expand. */
function CertItem({ name, issuer, image, onClick }: CertItemProps) {
    return(
        <li className="cert">
            <button type="button" className="cert-button" onClick={onClick} aria-label={`Expand ${name}`}>
                <Img src={getImage('certs', image)} alt={name} className="cert-image" />
            </button>
            <h3 className="cert-name">{name}</h3>
            <p className="cert-issuer">{issuer}</p>
        </li>
    )
}

export default CertItem
