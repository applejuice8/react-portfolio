import CertificationItem from './CertificationItem'

const certData = [
    {
        image: 'images/certs/CS50x.png',
        name: 'CS50x: Introduction to Computer Science',
        issuer: 'Harvard University'
    },
    {
        image: 'images/certs/CS50AI.png',
        name: 'CS50AI: Introduction to Artificial Intelligence with Python',
        issuer: 'Harvard University'
    },
]

function Certifications() {
    return(
        <>
            <div id="certs-container">
                {certData.map((item, index) => (
                    <CertificationItem key={index} {...item} />
                ))}
            </div>

            <div id="overlay">
                <button id="close-btn" className="pointer">&times;</button>
                <div id="overlay-cert">
                    <img id="overlay-image" src="" alt="" />
                    <div id="overlay-details">
                        <h2 id="overlay-name"></h2>
                        <p id="overlay-issuer"></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certifications