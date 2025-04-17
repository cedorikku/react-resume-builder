const Input = ({ type = 'text', label, onChange }) => {
    return (
        <div className="input-group flex w-50 flex-col gap-1">
            <label className="text-sm" htmlFor={name}>
                {label || name}
            </label>
            <input
                className="border border-black px-2 py-1"
                type={type}
                name={name}
                onChange={onChange}
                placeholder={label}
            ></input>
        </div>
    );
};

export default Input;
