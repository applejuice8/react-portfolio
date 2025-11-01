import EducationItem from './EducationItem';
import educationData from './educationData';

function EducationSection() {
    return (
        <section id='education'>
            <h2 className='section-title'>Education</h2>
            <div id='education-container'>
                {educationData.map((ed, index) => (
                    <EducationItem key={index} {...ed} />
                ))}
            </div>
        </section>
    );
}

export default EducationSection;