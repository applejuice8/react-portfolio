import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        purpose: 'Job Opportunity',
        name: '',
        email: '',
        message: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section id='contact'>
            <h2 className='section-title'>Get In Touch</h2>

            <form id='contact-form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <div id='radio-group'>
                        {['Job Opportunity', 'Collaboration', 'Others'].map(purpose => (
                            <label key={purpose} className='radio-option'>
                                <input
                                    type='radio'
                                    name='purpose'
                                    value={purpose}
                                    checked={formData.purpose === purpose}
                                    onChange={handleChange}
                                />
                                {purpose}
                            </label>
                        ))}
                    </div>
                </div>

                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button id='submit-button' className='pointer' type='submit'>
                    Send
                </button>
            </form>
        </section>
    );
}

export default Contact;