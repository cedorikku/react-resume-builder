export const Button = ({
    type = 'button',
    text,
    color = 'white',
    handleClick,
}) => {
    const bgColor = color !== 'white' ? `bg-${color}-500` : `bg-${color}`;
    const textColor = color !== 'white' ? 'text-white' : 'text-black';
    const hoverColor =
        color !== 'white' ? `hover:bg-${color}-600` : 'hover:bg-white/80';

    const classes = `w-full cursor-pointer ${textColor} rounded-sm ${bgColor} px-8 py-4 font-bold transition-colors ${hoverColor} active:scale-95`;

    return (
        <button type={type} onClick={handleClick} className={classes}>
            {text}
        </button>
    );
};

export default Button;
