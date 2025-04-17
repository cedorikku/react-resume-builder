export const Button = ({ type = 'button', text, handleClick }) => (
    <button
        type={type}
        onClick={handleClick}
        className="w-fit cursor-pointer rounded-lg bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 hover:shadow-lg font-semibold active:scale-95"
    >
        {text}
    </button>
);

export default Button;
