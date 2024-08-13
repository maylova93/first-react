
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
    };

    return (
        <button style={combinedStyles} onClick={action}>
            {text}
        </button>
    );
}

export default Button;
