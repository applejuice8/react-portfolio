function EducationCard({ logos, schoolName, degree = false, programme, year }) {
    return (
        <article className='education'>
            <div className='logo-container'>
                {logos.map((logo, index) => (
                    <img key={index} src={logo.src} alt={logo.alt} className='school-logo' />
                ))}
            </div>

            <div className='education-details'>
                <h3 className='school-name'>{schoolName}</h3>
                {degree && <p id='dual-degree'>(Dual Degree Programme)</p>}
                <p className='programme'>{programme}</p>
                <p className='year'>{year}</p>
            </div>
        </article>
    );
}

export default EducationCard;