import { awardTier, tierIcon } from '../../lib/awards'
import './AwardBadge.css'

/** The result as a solid pill with a trophy or medal icon, made for a white background such as a polaroid. */
function AwardBadge({ award }: { award: string }) {
    const tier = awardTier(award)

    return(
        <span className={`award-badge award-${tier}`}>
            <i className={tierIcon[tier]} aria-hidden="true"></i>
            {award}
        </span>
    )
}

export default AwardBadge
