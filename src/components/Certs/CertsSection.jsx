import { useState } from 'react';
import certs from './certsData';
import CertItem from './CertItem';
import CertOverlay from './CertOverlay';

function CertsSection() {
    const [expandedCert, setExpandedCert] = useState(null);

    return (
        <section id='certs'>
            <h2 className='section-title'>Certifications</h2>

            <div id='certs-container'>
                {certs.map((cert, index) => (
                    <CertItem key={index} cert={cert} onClick={setExpandedCert} />
                ))}
            </div>

            <CertOverlay cert={expandedCert} onClose={() => setExpandedCert(null)} />
        </section>
    );
}

export default CertsSection;