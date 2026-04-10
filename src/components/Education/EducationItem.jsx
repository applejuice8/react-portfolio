function EducationItem({ name, programme, grade, year, logos }) {
    return (
        <article className="education">
            <div className="logo-container">
                {logos.map((item, index) => (
                    <img key={index} src={`/images/education/${item.logo}`} alt={item.name} className="school-logo" />
                ))}
            </div>

            <div className="education-details">
                <h3 className="school-name">{name}</h3>
                <p className="programme">{programme}</p>
                <p className="grade">{grade}</p>
                <p className="year">{year}</p>
            </div>
        </article>
    )
}

export default EducationItem