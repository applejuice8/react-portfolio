function CertificationItem({ image, name, issuer }) {
    return(
        <article className="cert pointer">
            <img className="cert-image" src={image} alt={name} />
            <div className="cert-details">
                <h3 className="cert-name">{name}</h3>
                <p className="cert-issuer">{issuer}</p>
            </div>
        </article>
    )
}

export default CertificationItem