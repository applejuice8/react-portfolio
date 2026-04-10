function CertItem({ name, issuer, image, onClick }) {
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