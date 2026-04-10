import './Section.css'

function Section({ children, id }) {
    return(
        <section id={id}>
            <h2 className="section-title">
                {id.charAt(0).toUpperCase() + id.slice(1)}
            </h2>
            {children}
        </section>
    )
}

export default Section