function CertItem({ cert, onClick }) {
    return (
        <article className='cert pointer' onClick={() => onClick(cert)}>
            <img className='cert-image' src={cert.image} alt={cert.name} />
            <div className='cert-details'>
                <h3 className='cert-name'>{cert.name}</h3>
                <p className='cert-issuer'>{cert.issuer}</p>
            </div>
        </article>
    );
}

export default CertItem;