import { PropsWithChildren } from 'react'
import './Section.css'

interface SectionProps {
    id: string
    /** Heading text. Defaults to the id with a capital letter. */
    title?: string
}

function Section({ children, id, title }: PropsWithChildren<SectionProps>) {
    return(
        <section id={id}>
            <h2 className="section-title">
                {title ?? id.charAt(0).toUpperCase() + id.slice(1)}
            </h2>
            {children}
        </section>
    )
}

export default Section