import { getImage } from '../../lib/assets'
import type { Skill } from '../../data/types'
import Img from '../Img/Img'

function SkillItem({ name, icon }: Skill) {
    return(
        <li className="skill-item">
            <Img src={getImage('skills', icon)} alt={name} fit="contain" className="skill-icon" />
            <span>{name}</span>
        </li>
    )
}

export default SkillItem
