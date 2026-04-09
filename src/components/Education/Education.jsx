import EducationItem from './EducationItem'

const educationData = [
    {
        logo: 'images/education/Sunway University.png',
        name: 'Sunway University',
        degree: 'Bachelor of Science (Honours) in Computer Science',
        year: 'September 2024 - Current'
    },
    {
        logo: 'images/education/Sunway College.png',
        name: 'Sunway College',
        degree: 'Foundation in Science & Technology',
        year: 'September 2023 - September 2024'
    }
]

function Education() {
    return(
        <div id="education-container">
            {educationData.map((item, index) => (
                <EducationItem key={index} {...item} />
            ))}
        </div>
    )
}

export default Education