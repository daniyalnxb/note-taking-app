import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    darkTheme: false,
    toggleDarkTheme: () => {},
    font: 'Inter',
    setFont: () => {},
});

const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [font, setFont] = useState('Inter');

    const toggleDarkTheme = () => setDarkTheme((prev) => !prev);

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--font-family-base',
            `'${font}', ${
                font === 'Noto Serif' ? 'serif' : font === 'Source Code Pro' ? 'monospace' : 'sans-serif'
            }`
        );
    }, [font]);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const savedFont = localStorage.getItem('font');
        if (savedTheme) setDarkTheme(savedTheme === 'dark');
        if (savedFont) setFont(savedFont);
    }, []);
    
    useEffect(() => {
        localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
    }, [darkTheme]);
    
    useEffect(() => {
        localStorage.setItem('font', font);
    }, [font]);

    const value = {
        darkTheme,
        toggleDarkTheme,
        font,
        setFont
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
