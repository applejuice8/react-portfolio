import { useTheme } from '../../context/ThemeContext'
import { experienceData } from '../../data'
import { getImage } from '../../lib/assets'
import { formatPeriod } from '../../lib/format'
import { logoFile } from '../../lib/logos'
import Img from '../Img/Img'
import './Experience.css'

const lastJob = experienceData.length - 1

/**
 * Experience as a connected feed: a large plain logo per job with a thin line down to the next one,
 * the company in big bold type, the title in blue, the dates at the right edge and the points as rows.
 */
function Experience() {
    const { isLight } = useTheme()

    return(
        <ol id="experience-list">
            {experienceData.map((job, index) => (
                <li key={job.company} className="job">
                    {index < lastJob && <span aria-hidden="true" className="job-line" />}
                    <Img
                        src={job.logo ? getImage('experience', logoFile(job.logo, isLight)) : undefined}
                        alt={job.company}
                        fit="contain"
                        className="job-logo"
                    />
                    <div className="job-body">
                        <div className="job-head">
                            <div>
                                <h3 className="job-company">
                                    {job.link ? (
                                        <a href={job.link} target="_blank" rel="noreferrer" className="pointer">
                                            {job.company} <i className="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
                                        </a>
                                    ) : (
                                        job.company
                                    )}
                                </h3>
                                <p className="job-title">{job.title}</p>
                            </div>
                            <p className="job-period">{formatPeriod(job.period)}</p>
                        </div>
                        <ul className="job-points">
                            {job.points.map((point) => (
                                <li key={point}>
                                    <i className="fa-solid fa-code-commit" aria-hidden="true"></i>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ol>
    )
}

export default Experience
