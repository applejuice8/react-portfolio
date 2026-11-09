import { Fragment } from 'react'
import profileData from '../../data/profileData'
import './About.css'

/** Splits a paragraph into plain and highlighted parts (first occurrence of each keyword). */
function split(text: string, keywords: string[]): { text: string; hit: boolean }[] {
    const matches = keywords
        .map((word) => ({ word, index: text.indexOf(word) }))
        .filter((match) => match.index >= 0)
        .sort((a, b) => a.index - b.index)

    const parts: { text: string; hit: boolean }[] = []
    let cursor = 0
    for (const { word, index } of matches) {
        if (index < cursor) continue // overlaps a previous match
        if (index > cursor) parts.push({ text: text.slice(cursor, index), hit: false })
        parts.push({ text: word, hit: true })
        cursor = index + word.length
    }
    if (cursor < text.length) parts.push({ text: text.slice(cursor), hit: false })
    return parts
}

function About() {
    return(
        <>
            <div id="about-content">
                {profileData.about.map((paragraph) => (
                    <p key={paragraph}>
                        {split(paragraph, profileData.highlights).map((part, index) => (
                            <Fragment key={index}>
                                {part.hit ? <span className="highlight">{part.text}</span> : part.text}
                            </Fragment>
                        ))}
                    </p>
                ))}
            </div>
        </>
    )
}

export default About
