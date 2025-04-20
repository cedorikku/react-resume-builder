export const Button = ({ type = 'button', text, handleClick }) => (
    <button
        type={type}
        onClick={handleClick}
        className="hover:bg-primary-400 bg-primary-300 mb-4 cursor-pointer rounded-sm px-8 py-4 font-semibold text-white active:scale-95"
    >
        {text}
    </button>
);

export default Button;
