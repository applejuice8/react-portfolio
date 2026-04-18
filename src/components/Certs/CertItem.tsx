import type { Cert } from '../../types'

interface CertItemProps extends Cert {
    onClick: () => void
}

function CertItem({ name, issuer, image, onClick }: CertItemProps) {
    return(
        <article className="cert pointer" onClick={onClick}>
            <img className="cert-image" src={`/images/certs/${image}`} alt={name} />
            <div className="cert-details">
                <h3 className="cert-name">{name}</h3>
                <p className="cert-issuer">{issuer}</p>
            </div>
        </article>
    )
}

export default CertItem