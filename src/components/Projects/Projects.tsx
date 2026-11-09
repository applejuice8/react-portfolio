import { useEffect, useState, type ReactNode } from 'react'
import { projectsData } from '../../data'
import type { Project } from '../../data/types'
import { getImage } from '../../lib/assets'
import { initials } from '../../lib/format'
import Img from '../Img/Img'
import './Projects.css'

/*
 * The projects section as a Mac: a laptop whose screen is a desktop with a menu bar (and a live clock) and a Safari
 * window on it. Each project is a tab in Safari's tab bar, and the picture, name, points, tags and source link are all
 * on the screen.
 */

/** "https://github.com/applejuice8/ml-model-api", as shown in the address field. */
const repoUrl = (project: Project) => `https://github.com/${project.link.replace(/^https?:\/\/(www\.)?github\.com\//, '')}`

function Ico({ name, className = '' }: { name: string; className?: string }) {
    return <i aria-hidden="true" className={`fa-solid ${name} ${className}`} />
}

/** The three window buttons at the top left of a window. */
function WindowButtons() {
    return (
        <span aria-hidden="true" className="lp-window-buttons">
            <span />
            <span />
            <span />
        </span>
    )
}

/** Safari's address field: a shield at the left, the lock and full address centred, and a reload button at the right. */
function SafariAddress({ project }: { project: Project }) {
    return (
        <div className="lp-address">
            <Ico name="fa-shield-halved" className="lp-address-shield" />
            <span className="lp-address-url">
                <Ico name="fa-lock" />
                {repoUrl(project)}
            </span>
            <Ico name="fa-rotate-right" />
        </div>
    )
}

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** The date and time the way the Mac menu bar writes them, e.g. "Sat 7 Nov 7:41:55PM". */
function macDateTime(now: Date): string {
    const hours = now.getHours() % 12 || 12
    const pad = (value: number) => String(value).padStart(2, '0')
    return `${weekdays[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} ${hours}:${pad(now.getMinutes())}:${pad(now.getSeconds())}${now.getHours() < 12 ? 'AM' : 'PM'}`
}

/** A live clock: shows the current date and time and ticks every second. */
function MenuClock() {
    const [now, setNow] = useState(() => new Date())

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    return <time dateTime={now.toISOString()}>{macDateTime(now)}</time>
}

/** The Control Centre icon from the Mac menu bar: two small toggle switches, one above the other. */
function ControlCentre() {
    return (
        <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="1.5" y="2.5" width="13" height="4.5" rx="2.25" />
            <circle cx="11.75" cy="4.75" r="1.25" fill="currentColor" stroke="none" />
            <rect x="1.5" y="9" width="13" height="4.5" rx="2.25" />
            <circle cx="4.25" cy="11.25" r="1.25" fill="currentColor" stroke="none" />
        </svg>
    )
}

/** The Mac menu bar: the Apple logo, Safari's menus, and at the right battery percentage and icon, wifi, Control Centre and the live date and time. */
function MacMenuBar() {
    return (
        <div className="lp-menubar">
            <i aria-hidden="true" className="fa-brands fa-apple lp-apple" />
            <strong>Safari</strong>
            <span aria-hidden="true" className="lp-menus">
                {['File', 'Edit', 'View', 'History', 'Bookmarks', 'Window', 'Help'].map((menu) => (
                    <span key={menu}>{menu}</span>
                ))}
            </span>
            <span className="lp-status">
                <span className="lp-battery">
                    <span>82%</span>
                    <Ico name="fa-battery-three-quarters" />
                </span>
                <Ico name="fa-wifi" />
                <ControlCentre />
                <MenuClock />
            </span>
        </div>
    )
}

/**
 * Every project's page stacked in the same spot, with only the chosen one visible. The window is as tall as the tallest
 * page, so it does not jump in size when you change project.
 */
function Pages({ active, children }: { active: number; children: (project: Project) => ReactNode }) {
    return (
        <div className="lp-pages">
            {projectsData.map((project, index) => (
                <div
                    key={project.name}
                    role="tabpanel"
                    id={`projects-panel-${index}`}
                    aria-labelledby={`projects-tab-${index}`}
                    className={index === active ? '' : 'lp-hidden'}
                >
                    {children(project)}
                </div>
            ))}
        </div>
    )
}

/** A project's page in the window: the name, points, tags and link on the left, and the picture on the right. */
function ProjectPage({ project }: { project: Project }) {
    return (
        <div className="lp-page">
            <Img src={getImage('projects', project.image)} alt={project.name} className="lp-shot" />
            <div>
                <h3 className="lp-name">{project.name}</h3>
                <ul className="lp-points">
                    {project.points.map((point) => (
                        <li key={point}>
                            <i aria-hidden="true" className="fa-solid fa-chevron-right" />
                            {point}
                        </li>
                    ))}
                </ul>
                <ul className="lp-tags">
                    {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
                <a href={project.link} target="_blank" rel="noreferrer" className="lp-source pointer">
                    <i aria-hidden="true" className="fa-brands fa-github" /> Source Code <i aria-hidden="true" className="fa-solid fa-up-right-from-square" />
                </a>
            </div>
        </div>
    )
}

/** The projects as a Safari window on a Mac desktop, on a large laptop. */
function Projects() {
    const [active, setActive] = useState(0)

    return(
        <div id="projects-laptop">
            <div className="lp-screen">
                <div className="lp-desktop">
                    <MacMenuBar />
                    <div className="lp-desktop-body">
                        <div className="lp-window">
                            <div className="lp-toolbar">
                                <WindowButtons />
                                <Ico name="fa-table-columns" className="lp-sidebar-icon" />
                                <span className="lp-arrows">
                                    <Ico name="fa-chevron-left" />
                                    <Ico name="fa-chevron-right" />
                                </span>
                                <SafariAddress project={projectsData[active]} />
                                <span className="lp-actions">
                                    <Ico name="fa-arrow-up-from-bracket" />
                                    <Ico name="fa-plus" />
                                    <Ico name="fa-clone" />
                                </span>
                            </div>
                            <div role="tablist" aria-label="Projects" className="lp-tabs">
                                {projectsData.map((entry, index) => (
                                    <button
                                        key={entry.name}
                                        type="button"
                                        role="tab"
                                        id={`projects-tab-${index}`}
                                        aria-selected={index === active}
                                        aria-controls={`projects-panel-${index}`}
                                        onClick={() => setActive(index)}
                                        className={`lp-tab pointer ${index === active ? 'active' : ''}`}
                                    >
                                        <span aria-hidden="true" className={`lp-favicon lp-favicon-${index % 3}`}>
                                            {initials(entry.name)[0]}
                                        </span>
                                        <span className="lp-tab-name">{entry.name}</span>
                                    </button>
                                ))}
                            </div>
                            <Pages active={active}>{(project) => <ProjectPage project={project} />}</Pages>
                        </div>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="lp-base">
                <span />
            </div>
        </div>
    )
}

export default Projects
