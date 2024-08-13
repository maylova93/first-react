function Button({ action, size, theme, text }) {
    const sizeStyles = {
        small: { padding: '5px 10px', fontSize: '12px' },
        medium: { padding: '10px 20px', fontSize: '16px' },
        large: { padding: '15px 30px', fontSize: '20px' },
    };

    const themeStyles = {
        light: { backgroundColor: '#fff', color: '#000', border: '1px solid #ccc' },
        dark: { backgroundColor: '#333', color: '#fff', border: '1px solid #000' },
    };

    const combinedStyles = {
        ...sizeStyles[size],
        ...themeStyles[theme],
        cursor: 'pointer',
        borderRadius: '5px',
        display: 'inline-block',
        margin: '5px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s, transform 0.3s',
    };

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = theme === 'light' ? '#f0f0f0' : '#444';
        e.target.style.transform = 'scale(1.05)';
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = theme === 'light' ? '#fff' : '#333';
        e.target.style.transform = 'scale(1)';
    };

    return (
        <button
            style={combinedStyles}
            onClick={action}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text}
        </button>
    );
}

export default Button;
