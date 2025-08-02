import { useState } from 'react';
import Button from '../Button';

export const FormSection = ({ name, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <section
            id={name.toLowerCase() + '-form'}
            className="mb-8 rounded-lg border border-white/30 bg-zinc-900 p-12 w-350"
        >
            <div className="flex justify-between mb-6">
                <h2 className="font-bold">
                    <a
                        href={`#${name.toLowerCase()}-form`}
                        className="hover:text-white/80"
                    >
                        {name}
                    </a>
                </h2>

                <div className="flex basis-20">
                    <Button
                        text={isVisible ? "⯅" : "⯆"}
                        handleClick={() => {
                            setIsVisible(!isVisible);
                        }}
                    />
                </div>
            </div>
            {isVisible && children}
        </section>
    );
};
