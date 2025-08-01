import { v4 as uuidv4 } from 'uuid';

const Input = ({ type = 'text', value = '', label, placeholder, onChange }) => {
    const id = uuidv4();
    return (
        <div className="flex w-[100%] flex-col">
            {label ? (
                <label
                    className="mb-2 min-w-[15ch] text-sm font-medium"
                    htmlFor={id}
                >
                    {label || ''}
                </label>
            ) : (
                ''
            )}
            <input
                id={id}
                className="bg-background-200 focus:bg-background-300 w-[100%] rounded-sm border-1 border-white/25 p-4 transition-colors hover:border-white/75"
                type={type}
                value={value}
                onChange={onChange}
                placeholder={label || placeholder}
            ></input>
        </div>
    );
};

export default Input;
