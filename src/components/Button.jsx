export const Button = ({ type = 'button', text, handleClick }) => (
    <button
        type={type}
        onClick={handleClick}
        className="w-[100%] cursor-pointer rounded-sm bg-white px-8 py-4 font-bold text-black transition-colors hover:bg-white/80 active:scale-95"
    >
        {text}
    </button>
);

export default Button;
