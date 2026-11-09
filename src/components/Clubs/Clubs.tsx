import { useTheme } from '../../context/ThemeContext'
import { clubsData } from '../../data'
import { getImage } from '../../lib/assets'
import { newestFirst } from '../../lib/clubs'
import { formatPeriod } from '../../lib/format'
import { logoFile } from '../../lib/logos'
import Img from '../Img/Img'
import './Clubs.css'

/**
 * Clubs grouped by club: a plain logo in a fixed-width column on the left, centred against that club's text,
 * then the club name in bold and each role in blue with its dates, behind a blue rule.
 */
function Clubs() {
    const { isLight } = useTheme()

    return(
        <ol id="clubs-list">
            {clubsData.map((club) => (
                <li key={club.name} className="club">
                    <Img
                        src={club.logo ? getImage('clubs', logoFile(club.logo, isLight)) : undefined}
                        alt={club.name}
                        fit="contain"
                        className="club-logo"
                    />
                    <div className="club-body">
                        <h3 className="club-name">{club.name}</h3>
                        <ul className="club-positions">
                            {newestFirst(club).map((position) => (
                                <li key={position.role}>
                                    <p className="club-role">{position.role}</p>
                                    <p className="club-period">{formatPeriod(position.period)}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ol>
    )
}

export default Clubs
