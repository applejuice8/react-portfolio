function EducationItem({ logo, name, degree, year }) {
    return (
        <article className="education">
            <div className="logo-container">
                <img src={logo} alt={name} className="school-logo" />
            </div>

            <div className="education-details">
                <h3 className="school-name">{name}</h3>
                <p className="programme">{degree}</p>
                <p className="year">{year}</p>
            </div>
        </article>
    )
}

export default EducationItem