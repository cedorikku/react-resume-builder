export const Button = ({
    type = 'button',
    text,
    color = 'white',
    handleClick,
}) => {
    const colorVariants = {
        red: 'bg-red-600 hover:bg-red-500 text-white',
        white: 'bg-white hover:bg-white/80 text-black',
    };

    const classes = `w-full cursor-pointer rounded-sm ${colorVariants[color]} px-8 py-4 font-bold transition-colors active:scale-95`;

    return (
        <button type={type} onClick={handleClick} className={classes}>
            {text}
        </button>
    );
};

export default Button;
