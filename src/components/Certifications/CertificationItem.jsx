function CertificationItem({ image, name, issuer, onClick }) {
    return(
        <article className="cert pointer" onClick={onClick}>
            <img className="cert-image" src={image} alt={name} />
            <div className="cert-details">
                <h3 className="cert-name">{name}</h3>
                <p className="cert-issuer">{issuer}</p>
            </div>
        </article>
    )
}

export default CertificationItem