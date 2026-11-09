import { ctfsData, ctfsMore, hackathonsData, hackathonsMore } from '../../data'
import { getImage } from '../../lib/assets'
import AwardBadge from '../AwardBadge/AwardBadge'
import Img from '../Img/Img'
import './Hackathons.css'

/*
 * Hackathons and CTFs as polaroids, in two groups.
 * Each group shows every listed event in the order of its data file (sorted from the best result to the least),
 * then a dashed empty polaroid for the events that are not listed.
 * That count is hardcoded in the data files (`hackathonsMore`, `ctfsMore`). When it is 0 the tile is hidden.
 */

const groups = [
    { title: 'Hackathons', noun: 'hackathons', icon: 'fa-solid fa-code', events: hackathonsData, more: hackathonsMore },
    { title: 'CTFs', noun: 'CTFs', icon: 'fa-solid fa-flag', events: ctfsData, more: ctfsMore },
]

function Hackathons() {
    return(
        <div id="hackathons-container">
            {groups.map((group) => (
                <div key={group.title} className="event-group">
                    <h3 className="group-title">
                        <i className={group.icon} aria-hidden="true"></i>
                        {group.title}
                        <span className="group-rule" aria-hidden="true"></span>
                    </h3>
                    <ul className="polaroids">
                        {group.events.map((event) => (
                            <li key={event.name} className="polaroid">
                                <Img src={getImage('awards', event.image)} alt={event.name} className="polaroid-photo" />
                                <h4 className="polaroid-name">{event.name}</h4>
                                <AwardBadge award={event.award} />
                                <p className="polaroid-date">{event.date}</p>
                            </li>
                        ))}
                        {group.more > 0 && (
                            <li className="polaroid-more">
                                <span className="more-count">+{group.more}</span>
                                <span className="more-text">more {group.noun} without a placement</span>
                            </li>
                        )}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Hackathons
