import EducationCard from './EducationCard';

function EducationSection() {
    const educationData = [
        {
            logos: [
                { src: 'images/education/Sunway University Dark.png', alt: 'Sunway University' },
                { src: 'images/education/Lancaster University Dark.png', alt: 'Lancaster University' },
            ],
            schoolName: 'Sunway University & Lancaster University',
            degree: true,
            programme: 'Bachelor of Science (Honours) in Computer Science',
            year: 'September 2024 - Current',
        },
        {
            logos: [
                { src: 'images/education/Sunway College Dark.png', alt: 'Sunway College' },
            ],
            schoolName: 'Sunway College',
            programme: 'Foundation in Science & Technology',
            year: 'September 2023 - September 2024',
        },
    ];

    return (
        <section id='education'>
            <h2 className='section-title'>Education</h2>
            <div id='education-container'>
                {educationData.map((ed, index) => (
                    <EducationCard key={index} {...ed} />
                ))}
            </div>
        </section>
    );
}

export default EducationSection;