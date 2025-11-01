import { useState, useEffect } from 'react';

function ThemeToggle() {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('light-mode', isLight);
    }, [isLight]);

    return (
        <button id='theme-toggle' onClick={() => setIsLight(!isLight)}>
        <i className={`fa-solid ${isLight ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
    );
}

export default ThemeToggle;