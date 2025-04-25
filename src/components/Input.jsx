import { v4 as uuidv4 } from 'uuid';

const Input = ({ type = 'text', label, placeholder, onChange }) => {
    const id = uuidv4();
    return (
        <div className="input-group flex w-[100%] flex-col gap-1">
            <label className="text-sm font-medium" htmlFor={id}>
                {label || ''}
            </label>
            <input
                id={id}
                className="bg-background-200 focus:bg-background-300 rounded-sm border-1 border-white/25 p-4 transition-colors hover:border-white/75"
                type={type}
                onChange={onChange}
                placeholder={label || placeholder}
            ></input>
        </div>
    );
};

export default Input;
