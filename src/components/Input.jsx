const Input = ({ type = 'text', label, onChange }) => {
    return (
        <div className="input-group flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor={name}>
                {label || name}
            </label>
            <input
                className="bg-background-300 mb-4 rounded-sm border-1 border-white/25 p-4"
                type={type}
                name={name}
                onChange={onChange}
                placeholder={label}
            ></input>
        </div>
    );
};

export default Input;
